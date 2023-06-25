import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import { signInRequest } from "@/services/auth";
import { api } from "@/services/api";
import Router from 'next/router'

type User = {
    id: number;
    nmRazao: string;
    email: string;
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<boolean>
}

interface AuthProviderProps {
    children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)

    const isAuthenticated = !!user.id;

    useEffect(() => {
        const { 'andra-sistemas.token': token } = parseCookies()
        const userLocalStorage = localStorage.getItem('@andra-sistemas:user');

        if (token && userLocalStorage) {
            setUser(() => JSON.parse(userLocalStorage))
        } else {
            Router.push('/');
        }
    }, [])

    async function signIn({ email, password }: SignInData): Promise<boolean> {
        try {
            const { token, id, nmRazao } = await signInRequest({
                email,
                password,
            })

            setCookie(undefined, 'andra-sistemas.token', token, {
                maxAge: 60 * 60 * 1, // 1 hour
            })
            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            const loggedUser = { id, nmRazao, email };

            setUser(loggedUser)
            localStorage.setItem('@andra-sistemas:user', JSON.stringify(loggedUser));

            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);

    return context;
}