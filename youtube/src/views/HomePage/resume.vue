<script setup>
</script>

<template>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Resume</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>

<body>
    <div class="top-area">
        <h1 class="name">Brian Jo</h1>
        <h2 class="headings">Radiological Technologists</h2>
    </div>

    <hr>

    <div class="resume-body">
        <div class="left-area" >
            <div class="contact-page">
                <h1 class="headings">Contact</h1>
                <h2>brianjo1994@gmail.com</h2>
                <h2>437-326-5636</h2>
                <a href="https://github.com/xraycodes">https://github.com/xraycodes</a>
                <a href="linkedin.com/in/brianskjo">linkedin.com/in/brianskjo</a>
            </div>
            
            <div class="education">
                <h1 class="headings">Education</h1>
                <h2>McMaster University</h2>
                <ul>
                    <li>Bachelor of Medical Radiation Sciences(MRSc)</li>
                    <li>Advanced College Diploma of Health Science Program</li>
                    <li>Radiography Specialization</li>
                </ul>
            </div>
    
            <div class="skills-certification">
                <h1 class="headings">Skills/Certifications</h1>
                <ul>
                    <li>7+ years of clinical experience</li>
                    <li>OARM Manager Mentorship Program Certificate</li>
                    <li>Programming languages</li>
                        <ul class="inner-list">
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Vue Framework</li>
                        </ul>
                    <li>Google suite</li>
                    <li>Bilingual in English and Korean</li>
                </ul>
            </div>
        </div>

        <div class="vertical-line"></div>
    
        <div class="right-area">
            <h1 class="headings">Work Experience</h1>
            <div class="work-information">
                <h2>Humber River Hospital</h2>
                <h2>12/2020 - Present</h2>
                <h2>St Michaels' Hospital</h2>
                <h2>01/2019 - 01/2020</h2>
                <h2>Hitek Medical Imaging</h2>
                <h2>08/2016 - 09/2018</h2>
            </div>
            <ul>
                <li>Operated X-Ray equipment and ensured adherence to radiation safety</li>
                <li>Provided radiological images during pandemic </li>
                <li>Performed x-ray procedures as part of Code Trauma</li>
                <li>Utilized EMR(Meditech), PACS(Intellispace), EHR. Experienced with all vendors</li>
                <li>Mentored students in positioning techniques, anatomy comprehension and patient care to foster their professional growth.</li>
                <li>Comfortable with high-pressure environments and able to work independently and with others. </li>
                <li>Collaborated with radiologists and management to implement changes to x-ray protocols as a member of the QA committee. </li>
                <li>Operated equipment from Philips, Carestream, Siemens, and GE </li>
                <li>Proficiently performed a wide range of X-ray examinations, including orthopedic, thoracic, abdominal, specialized imaging procedures using fluoroscopy and C-Arm.  </li>
            </ul>
        </div> 
    </div>  
</body>
</html>
</template>

<style scoped>
a {
    display:block;
    margin: 10px 0;
    font-family: 'Roboto', sans-serif; ;
    font-size: 20px
}
body{
    width: 1000px;;
    margin: auto;
    height: 100vh;
    /* margin-left: 500px; */
}

h2, li{
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin: 10px 0;
}

hr{
    border-left: 1px solid black;
}

.contact-page{
    margin: 0 0 15px 0;
}

.inner-list {
    list-style-type: disc; /* Style for inner list bullet */
}

.resume-body{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap:100px;
}

.headings{
    color:#0b5394;
    font-size: 30px;;
    font-family: 'Roboto', sans-serif;
    margin: 5px 0;
}   

.left-area{
    width: 30%;
}

.right-area {
    width: auto;
}

.top-area{
    text-align: center;
}

.vertical-line{
    border-left: 1px solid black;
    align-self: stretch;
    margin: 0 0 0 0;
}

.work-information{
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
}

.name{
    font-size: 50px;
    font-weight: bold;
}


</style>