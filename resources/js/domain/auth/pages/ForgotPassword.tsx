import { FormEventHandler } from 'react';

import { Head, useForm } from '@inertiajs/react';

import InputError from '@/components/inertia/InputError';
import TextInput from '@/components/inertia/TextInput';
import GuestLayout from '@/layouts/guest/GuestLayout';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = e => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email address and we will
                email you a password reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={e => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="mt-4 flex items-center justify-end"></div>
            </form>
        </GuestLayout>
    );
}
