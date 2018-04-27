
import React from 'react';
import classes from './Input.css'

const input = (props) =>{
    let inputElement = null;
    let inputClasses = [classes.InputElement];
    if(!props.inValid && props.isTouched){
        inputClasses.push(classes.inValid);
    }
    switch(props.elementType){
        case('input'):
            inputElement = <input className={inputClasses.join(' ')} value={props.value} {...props.elementConfig} onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} value={props.value} {...props.elementConfig} onChange={props.changed} />;
            break;
        case('select'):
            inputElement = (
                <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map( (option, i) => (
                        <option value={option.value} key={i}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} value={props.value} {...props.elementConfig}  onChange={props.changed} />;

    }
    return(
        <div>
            <label>{props.elementConfig.placeholder}</label>
            {inputElement}
        </div>
    )
}

export default input;