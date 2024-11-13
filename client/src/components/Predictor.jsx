import React from 'react';
import { useForm } from 'react-hook-form';

export default function Predictor() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [predictedPrice, setPredictedPrice] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const onSubmit = async (data) => {
        // Convert keys to match the feature names expected by the model
        const formattedData = {
            'Area': data['Area'],
            'Location': data['Location'],
            'No. of Bedrooms': data['No of Bedrooms'],
            'New/Resale': data['New/Resale'],
            'Gymnasium': data['Gymnasium'],
            'Lift Available': data['Lift Available'],
            'Car Parking': data['Car Parking'],
            'Maintenance Staff': data['Maintenance Staff'],
            '24x7 Security': data['24x7 Security'],
            'Children\'s Play Area': data['Childrens Play Area'],
            'Clubhouse': data['Clubhouse'],
            'Intercom': data['Intercom'],
            'Landscaped Gardens': data['Landscaped Gardens'],
            'Indoor Games': data['Indoor Games'],
            'Gas Connection': data['Gas Connection'],
            'Jogging Track': data['Jogging Track'],
            'Swimming Pool': data['Swimming Pool']
        }
        
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://127.0.0.1:5173/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setPredictedPrice(result.predicted_price);
    } catch (err) {
      setError('Failed to fetch prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Predict Your Home's Value</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Area */}
    <div>
      <label className="block text-sm font-medium mb-1">Area (sq ft)</label>
      <input 
        type="number" 
        {...register('Area', { required: true, valueAsNumber: true, defaultValue: 0 })} 
        className="border rounded px-3 py-2 w-full" 
      />
      {errors.Area && <span className="text-red-500">This field is required</span>}
    </div>

    {/* Location */}
    <div>
      <label className="block text-sm font-medium mb-1">Location</label>
      <input 
        type="text" 
        {...register('Location', { required: true, defaultValue: "" })} 
        className="border rounded px-3 py-2 w-full" 
      />
      {errors.Location && <span className="text-red-500">This field is required</span>}
    </div>

    {/* No. of Bedrooms */}
    <div>
      <label className="block text-sm font-medium mb-1">No. of Bedrooms</label>
      <input 
        type="number" 
        {...register('No of Bedrooms', { required: true, valueAsNumber: true, defaultValue: 0 })} 
        className="border rounded px-3 py-2 w-full" 
      />
      {errors['No of Bedrooms'] && <span className="text-red-500">This field is required</span>}
    </div>

    {/* New/Resale */}
    <div>
      <label className="block text-sm font-medium mb-1">New/Resale</label>
      <select 
        {...register('New/Resale', { required: true, defaultValue: 0 })} 
        className="border rounded px-3 py-2 w-full"
      >
        <option value="1">New</option>
        <option value="0">Resale</option>
      </select>
      {errors['New/Resale'] && <span className="text-red-500">This field is required</span>}
    </div>

    {/* Gymnasium */}
    <div>
      <label className="block text-sm font-medium mb-1">Gymnasium</label>
      <select 
        {...register('Gymnasium', { required: true, defaultValue: 0 })} 
        className="border rounded px-3 py-2 w-full"
      >
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
      {errors.Gymnasium && <span className="text-red-500">This field is required</span>}
    </div>

    {/* Lift Available */}
    <div>
      <label className="block text-sm font-medium mb-1">Lift Available</label>
      <select 
        {...register('Lift Available', { required: true, defaultValue: 0 })} 
        className="border rounded px-3 py-2 w-full"
      >
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
      {errors['Lift Available'] && <span className="text-red-500">This field is required</span>}
    </div>

    {/* Car Parking */}
    <div>
      <label className="block text-sm font-medium mb-1">Car Parking</label>
      <select 
        {...register('Car Parking', { required: true, defaultValue: 0 })} 
        className="border rounded px-3 py-2 w-full"
      >
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
      {errors['Car Parking'] && <span className="text-red-500">This field is required</span>}
    </div>

    <div>
    <label className='block text-sm font-medium mb-1' for="security">24x7 Security:</label>
    <select name="security" id="security"
    {...register('24x7 Security', { required: true, defaultValue: 0 })}
    className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['24x7 Security'] && <span className="text-red-500">This field is required</span>}
    </div>
    <div>
    <label for="play_area">Children's Play Area:</label>
    <select name="play_area" id="play_area"
        {...register(`Childrens Play Area`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full">
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors[`Childrens Play Area`] && <span className="text-red-500">This field is required</span>}
</div>
<div>
    <label for="clubhouse">Clubhouse:</label>
    <select name="clubhouse" id="clubhouse"
            {...register(`Clubhouse`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['Clubhouse'] && <span className="text-red-500">This field is required</span>}
    </div>
<div>
    <label for="gas_connection">Gas Connection:</label>
    <select name="gas_connection" id="gas_connection"
            {...register(`Gas Connection`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['Gas Connection'] && <span className="text-red-500">This field is required</span>}
    </div>

    <div>
    <label for="indoor_games">Indoor Games:</label>
    <select name="indoor_games" id="indoor_games"
                {...register(`Indoor Games`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['Indoor Games'] && <span className="text-red-500">This field is required</span>}
    </div>
<div>
    <label for="intercom">InterCom:</label>
    <select name="intercom" id="intercom"
                {...register(`Intercom`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['Intercom'] && <span className="text-red-500">This field is required</span>}
    </div>
    <div>
    <label for="jogging_track">Jogging Track:</label>
    <select name="jogging_track" id="jogging_track"
                {...register(`Jogging Track`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['Jogging Track'] && <span className="text-red-500">This field is required</span>}
    </div>
    <div>
    <label for="landscaped_gardens">Landscaped Gardens:</label>
    <select name="landscaped_gardens" id="landscaped_gardens"
                {...register(`Landscaped Gardens`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['Landscaped Gardens'] && <span className="text-red-500">This field is required</span>}
    </div>

    <div>
    <label for="maintenance_staff">Maintenance Staff:</label>
    <select name="maintenance_staff" id="maintenance_staff"
                {...register(`Maintenance Staff`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['Maintenance Staff'] && <span className="text-red-500">This field is required</span>}
    </div>
<div>
    {/* swimming pool */}
    <div>
    <label for="swimming_pool">Swimming Pool:</label>
    <select name="swimming_pool" id="swimming_pool"
                {...register(`Swimming Pool`, { required: true, defaultValue: 0 })}
        className="border rounded px-3 py-2 w-full"
    >
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    {errors['Swimming Pool'] && <span className="text-red-500">This field is required</span>}
    </div>


</div>
  </div>

  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Predict Price</button>
</form>


      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {predictedPrice && <div className="mt-4 p-4 border rounded">Predicted Price: ${predictedPrice.toLocaleString()}</div>}
    </div>
  );
}
