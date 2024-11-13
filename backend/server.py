from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import json
import joblib
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd
from sklearn.base import BaseEstimator, TransformerMixin
import geopy
from geopy.geocoders import Nominatim
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import xgboost as xgb
from xgboost import XGBRegressor
from preprocessing import LocationTransformer, LogTransformer


app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict_house_price():
    input_data = request.get_json()
    if isinstance(input_data, dict):
        input_data = pd.DataFrame([input_data])
        print(input_data.head())
    with open('pipeline.pkl', 'rb') as f:
        pipeline = pickle.load(f)

    with open('xgb.pkl', 'rb') as f:
        model = pickle.load(f)
    
    # Preprocesssing input data using pipeline
    processed_data = pipeline.transform(input_data)
    
    # prediction using xgboost model
    prediction = model.predict(processed_data)

    def postprocess(y_pred):
        y_pred = np.expm1(y_pred)
        y_pred *= 100000
        return y_pred 
    
    final_pred = postprocess(prediction)
    
    
    print("-" * 64)
    print(final_pred[0])
    print(float(final_pred[0]))
    print("-" * 64)


    return jsonify({
        'predicted_price': float(final_pred[0])  # Return the first prediction if single row
    })

if __name__ == '__main__':
    app.run(debug=True, port=5173)



'''
input_data should look like this 

 input_data = {
    'Area': 1500,
    'Location': 'Andheri West',
    'No. of Bedrooms': 3,
    'New/Resale': 1,
    'Gymnasium': 1,
    'Lift Available': 1,
    'Car Parking': 1,
    'Maintenance Staff': 1,
    '24x7 Security': 1,
    'Children\'s Play Area': 1,
    'Clubhouse': 1,
    'Intercom': 1,
    'Landscaped Gardens': 1,
    'Indoor Games': 1,
    'Gas Connection': 1,
    'Jogging Track': 1,
    'Swimming Pool': 1
}


'''