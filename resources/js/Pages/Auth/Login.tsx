import React from 'react';
import { t } from 'i18next';
import { store } from '@/actions/App/Http/Controllers/AuthController';

import AppLayout from '@/Layouts/AppLayout';
import FloatingLable from '@/components/ui/FloatingLablel';
import Button from '@/components/ui/Button';

import logo from '@/assets/images/logo.png';

import { FcGoogle } from 'react-icons/fc';
import { VscSignIn } from 'react-icons/vsc';
import { useForm } from '@inertiajs/react';

export type LoginProps = {
    empid: string;
    password: string;
};

const initValues = {
    empid: '500322',
    password: 'password',
};

const Login = () => {
    const { data, setData, post, processing, errors } =
        useForm<LoginProps>(initValues);
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!errors.password && !errors.empid) {
            post(store().url);
        }
    };

    return (
        <AppLayout>
            <section className="flex flex-col justify-center items-center max-w-md mx-auto p-10 shadow-lg">
                <img src={logo} alt="logo" className="size-32 mb-6" />
                <h1 className="text-3xl font-semibold mb-6">{t('Login')}</h1>

                {errors.empid && (
                    <p className="alert-error px-4 py-2 my-2 rounded-sm w-full">
                        {errors.empid}
                    </p>
                )}

                {errors.password && (
                    <p className="alert-error px-4 py-2 my-2 rounded-sm w-full">
                        {errors.password}
                    </p>
                )}

                <form
                    onSubmit={submit}
                    className="w-full flex flex-col gap-3 mb-6"
                >
                    <FloatingLable
                        id="empid"
                        placeholder={t('Employee ID')}
                        name="empid"
                        value={data.empid}
                        onChange={(e) =>
                            setData({ ...data, empid: e.target.value })
                        }
                    />
                    <FloatingLable
                        id="password"
                        placeholder={t('Password')}
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                    />
                    <Button
                        type="submit"
                        className="btn-primary w-full mt-6"
                        disabled={processing}
                    >
                        <VscSignIn className="rtl:rotate-180" />
                        <span className="">{t('Login')}</span>
                    </Button>
                </form>
                <a
                    href="/"
                    className="flex justify-center items-center gap-2 btn-primary p-4 w-full rounded-lg"
                >
                    <FcGoogle className="text-2xl" />
                    <span>{t('Login with Google')}</span>
                </a>
            </section>
        </AppLayout>
    );
};

export default Login;
