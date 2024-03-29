import { defaultFormResponse } from '@/constants';
import { IFormResponse } from '@/types';
import { ChangeEvent, useState, useCallback, useEffect } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
    const [state, setState] = useState<T>(initialState);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    }, [state]);

    const [response, setResponse] = useState<IFormResponse>(defaultFormResponse);

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'));
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => setResponse(defaultFormResponse), 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [response]);

    return { state, onChange, variant, toggleVariant, response, setResponse, setState };
};
