import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleLogo from '../../assets/googleImg.png'

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const logoClick = () => {
        navigate("/");
    };

    const signUp = () => {
        navigate("/signup");
    }

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        navigate("/dashboard")
    };

    // Toggle function for password visibility
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleSignup = () => {
        console.log("Google Sign-Up button clicked");
        // Implement Google signup logic here
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div
                    className="mx-auto cursor-pointer"
                    onClick={logoClick}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "20px",  // Optional spacing
                    }}
                >
                    <TipsAndUpdatesIcon
                        style={{
                            fontSize: "40px",
                            color: "#B04AEE", // Matching the button color
                        }}
                    />
                </div>
                <Typography
                    variant="h5"
                    component="h1"
                    sx={{ mt: 4, color: "white", textAlign: "center", fontSize: '32px' }}
                >
                    Yooo, Welcome Back!
                </Typography>
                <Typography
                    variant="h5"
                    component="h1"
                    sx={{ mt: 1, color: "rgba(255, 255, 255, 0.8)", textAlign: "center", fontSize: '16px' }}
                >
                    Ready to brighten your space again?
                </Typography>
            </div>

            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    maxWidth: "500px",
                    padding: "20px",
                    borderRadius: "18px",
                    display: "flex",  // Flexbox to center content
                    justifyContent: "center",  // Centers the form elements
                    flexDirection: "column",  // Ensures vertical stacking
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <TextField
                        label="Username"
                        InputLabelProps={{ style: { color: "white" } }}
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 3,
                                message: "Username must be at least 3 characters",
                            },
                        })}
                        error={Boolean(errors.username)}
                        helperText={errors.username?.message}
                        margin="normal"
                        InputProps={{
                            style: { color: "white" },
                        }}
                        sx={{
                            width: '370px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3a3a3a',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7C59D1', // hover effect color
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#B04AEE', // focused effect color
                                },
                            },
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}  // Toggle input type between password and text
                        InputLabelProps={{ style: { color: "white" } }}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        margin="normal"
                        InputProps={{
                            style: { color: "white" },
                            endAdornment: (
                                <Button
                                    sx={{ color: "white", marginRight: '-10px' }}
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </Button>
                            ),  // Add the eye icon for toggling
                        }}
                        sx={{
                            mt: 2,
                            width: '370px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3a3a3a',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7C59D1', // hover effect color
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#B04AEE', // focused effect color
                                },
                            },
                        }}
                    />
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 2,
                        backgroundColor: "#B04AEE",
                        "&:hover": { backgroundColor: "#7C59D1", transform: "scale(1.01)"},
                        color: "white",
                        fontSize: '16px',
                        textTransform: "none", // Prevents uppercase text
                    }}
                    fullWidth
                >
                    Sign In
                </Button>

                {/* Divider Line with OR Text */}
                <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
                    <Box sx={{ flex: 1, borderBottom: "1px solid #3a3a3a" }} />
                    <Typography sx={{ mx: 2, color: "rgba(255, 255, 255, 0.8)" }}>or</Typography>
                    <Box sx={{ flex: 1, borderBottom: "1px solid #3a3a3a" }} />
                </Box>

                <Button
                    onClick={handleGoogleSignup}
                    variant="contained"
                    sx={{
                        backgroundColor: "#3a3a3a",
                        "&:hover": {
                            transform: "scale(1.01)",  // Scale the button by 1.2 times on hover
                        },
                        color: "white",
                        fontSize: '16px',
                        textTransform: "none", // Prevents uppercase text
                    }}
                    fullWidth
                    startIcon={<img src={GoogleLogo} alt="Google" style={{ width: 30, height: 30 }} />}
                >
                    Sign up with Google
                </Button>

                <Box mt={1} sx={{ mt: 3, textAlign: "center" }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }} >Don't have an account? </span>
                    <Link
                        onClick={signUp}
                        sx={{
                            color: "#B04AEE",
                            "&:hover": { color: "#7C59D1" },
                            textDecoration: "none",
                            cursor: "pointer",  // Optional: makes it clear the text is clickable
                        }}
                    >
                        Sign Up
                    </Link>
                </Box>

                <Box sx={{ mt: 2, textAlign: "center" }}>
                    <Link
                        href="#"
                        sx={{
                            color: "#B04AEE",
                            "&:hover": { color: "#7C59D1" },
                            textDecoration: "none",
                        }}
                    >
                        Forgot Password?
                    </Link>
                </Box>

            </Box>
        </div>
    );
}

export default Login;