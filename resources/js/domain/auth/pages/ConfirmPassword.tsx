import { useEffect, FormEventHandler } from 'react';

import { Head, useForm } from '@inertiajs/react';

import InputError from '@/components/inertia/InputError';
import InputLabel from '@/components/inertia/InputLabel';
import TextInput from '@/components/inertia/TextInput';
import { Button } from '@/components/ui';
import GuestLayout from '@/layouts/guest/GuestLayout';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = e => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your password before
                continuing.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={e => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Button
                        element="primary"
                        className="ml-4"
                        disabled={processing}
                        label="Confirm"
                    />
                </div>
            </form>
        </GuestLayout>
    );
}
