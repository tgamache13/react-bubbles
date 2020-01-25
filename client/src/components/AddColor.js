import React, { useState } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

const AddColor = (props) => {
    const [newColor, setNewColor] = useState({
        color: '',
        code: { hex: ''}
    });

    const handleChange = e => {
        setNewColor({
            ...newColor,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/colors', newColor)
            .then(res => {
                console.log('new color added', res);
                props.updateColors(res.data);
                props.history.push('/bubble-page')
            })
            .catch(err => console.log('error adding color', err));
    };

    return (
        <div className='add-color'>
            <form onSubmit={handleSubmit}>
                <legend>add color</legend>
                <label>
                    color name:
                    <input
                        type='text'
                        name='color'
                        placeholder={newColor.color}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                        hex code:
                    <input
                        type='text'
                        name='code'
                        placeholder={newColor.code.hex}
                        onChange={handleChange}
                    />
                </label>
                <div className="button-row">
                    <button type="submit">Add Color</button>
                </div>
            </form>
        </div>
    )
}

export default AddColor;