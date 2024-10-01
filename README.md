<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f0f0f0;
            color: #333;
            line-height: 1.6;
        }

        .about-me {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
        }

        .container {
            background-color: #fff;
            max-width: 1000px;
            display: flex;
            flex-direction: column;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .container:hover {
            transform: translateY(-10px);
        }

        .header {
            background: linear-gradient(135deg, #0072ff, #00c6ff);
            padding: 30px;
            color: #fff;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.2rem;
            font-style: italic;
        }

        .profile {
            display: flex;
            align-items: center;
            padding: 30px;
        }

        .profile img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            border: 4px solid #0072ff;
            margin-right: 30px;
        }

        .info {
            max-width: 500px;
        }

        .info h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
            color: #0072ff;
        }

        .info p {
            font-size: 1rem;
            margin-bottom: 15px;
            text-align: justify;
        }

        .social-icons {
            margin-top: 20px;
        }

        .social-icons a {
            text-decoration: none;
            color: #0072ff;
            margin-right: 15px;
            font-size: 1.5rem;
            transition: color 0.3s ease;
        }

        .social-icons a:hover {
            color: #00c6ff;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .profile {
                flex-direction: column;
                text-align: center;
            }

            .profile img {
                margin: 0 auto 20px;
            }

            .info {
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="about-me">
        <div class="container">
            <div class="header">
                <h1>Hello, I'm [Your Name]</h1>
                <p>A passionate developer and problem-solver</p>
            </div>
            <div class="profile">
                <img src="https://via.placeholder.com/150" alt="Your profile picture">
                <div class="info">
                    <h2>About Me</h2>
                    <p>I'm a software developer with experience in building dynamic web applications. I enjoy learning new technologies and creating projects that solve real-world problems. My areas of expertise include full-stack development, APIs, and cloud solutions.</p>
                    <p>In my free time, I like to contribute to open-source projects, explore new frameworks, and collaborate with other developers.</p>
                    <div class="social-icons">
                        <a href="https://github.com/yourprofile" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        <a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Font Awesome for icons -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</body>
</html>
