import numpy as np
import pandas as pd
from sklearn.base import BaseEstimator, TransformerMixin
import geopy
from geopy.geocoders import Nominatim
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline


class LocationTransformer(BaseEstimator, TransformerMixin):
    def __init__(self):
        pass
    
    def get_lat_long(self, location):
        geolocator = Nominatim(user_agent="geoapi")       
        print(f"fetching {location}")
        try:
            loc = geolocator.geocode(location + ", Mumbai")
            return loc.latitude, loc.longitude
        except:
            print(f"Error in fetching location {location}, searching MMR")
            try:
                loc = geolocator.geocode(location + ", Mumbai Metropolitan Region")
                return loc.latitude, loc.longitude
            except:
                print(f"Not even found in MMR") 
                try:
                    loc = geolocator.geocode(location + ", Navi Mumbai")
                    print(f"F")
                    return loc.latitude, loc.longitude
                except:
                    try:
                        loc = geolocator.geocode(location + ", District Thane")
                        print(f"Found in Thane")
                        return loc.latitude, loc.longitude
                    except:
                        print("Not found")  
                           
        return None, None
  

    def fit(self, X, y=None):
        return self

    def transform(self, X, y=None):
        if isinstance(X, pd.Series):  
            X['lat_long'] = self.get_lat_long(X['Location'])
            X['Latitude'], X['Longitude'] = X['lat_long']
            X.drop('lat_long', inplace=True)
            X.drop('Location', inplace=True)

            return X
        else:
            X['lat_long'] = X['Location'].apply(self.get_lat_long)
            X.drop(columns=['Location'], inplace=True)
            X.dropna(subset=['lat_long'], inplace=True)
            X[['Latitude', 'Longitude']] = pd.DataFrame(X['lat_long'].tolist(), index=X.index)
            
            if 'lat_long' in X.columns:
                X.drop(columns=['lat_long'], inplace=True)
            if 'Location' in X.columns:
                X.drop(columns=['Location'], inplace=True)

            return X


class LogTransformer(BaseEstimator, TransformerMixin):
    def __init__(self):
        self.columns_to_transform = ['Area']  # Modify as necessary

    def fit(self, X, y=None):
        return self

    def transform(self, X, y=None):
        # Convert single row (Series) to DataFrame
        if isinstance(X, pd.Series):
            X = pd.DataFrame([X])
        
        for col in self.columns_to_transform:
            if col in X.columns:
                X[col] = np.log1p(X[col])
        
        return X



from sklearn.pipeline import Pipeline
# pipeline = Pipeline(steps=[
#     ('location_transformer', LocationTransformer()),  # No fitting needed
#     ('log_transformer',LogTransformer()),        # No fitting needed
#     ('scaler', sc)                          # Already fitted scaler
# ])