import { useState } from 'react';

export const useForm = <T extends Object>(iniState: T) => {

    const [state, setState] = useState(iniState);

    const onChange = (value: string, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange
    }
}