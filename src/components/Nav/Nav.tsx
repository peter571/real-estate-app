import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { authActions } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import defaultImg from '../../images/default.jpg';
import { RootState } from '../../store/reducers';

const Nav = () => {

    const [userProfilePic, setUserProfilePic] = useState(defaultImg);
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector((state: RootState) => state.user);

    const logout = () => {
        dispatch(authActions.logout());
    }

    useEffect(() => {
        if (isAuthenticated) {
            setUserProfilePic(JSON.parse(localStorage.getItem('realtor')!).user.profileImg);
        }
    }, [isAuthenticated]);

    const navStyles = {
        btnlink: 'border cursor-pointer rounded-sm border-[#212222] py-1 px-2 sm:px-3 hover:bg-[#212222] hover:text-white',
        logolink: 'text-xl sm:text-3xl text-[#212222] cursor-pointer font-semibold',
        navWrapper: 'flex justify-between items-center',
        avatarLogout: 'flex flex-row items-center align-middle justify-center gap-4',
        image: 'w-10 h-10 rounded-full',
    };

    const { btnlink, logolink, navWrapper, avatarLogout, image } = navStyles;

    return (
        <nav className={navWrapper}>
            <Link className={logolink} to="/">
                254 Realtors
            </Link>
            {isAuthenticated && (
                <Link className={`${btnlink} absolute sm:hidden top-16 right-6`} to='/upload-property/images' >
                    Upload Property
                </Link>
            )}
            <div>
                {isAuthenticated ? (
                    <div className={avatarLogout}>
                        <Link className={`${btnlink} hidden sm:flex`} to='/upload-property/images' >
                            Upload Property
                        </Link>
                        <span className={btnlink} onClick={logout}>
                            Logout
                        </span>
                        <img
                            className={image}
                            src={userProfilePic}
                            alt="avatar"
                        />
                    </div>
                ) : (
                    <Link className={btnlink} to='/login'>
                        Login
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Nav
