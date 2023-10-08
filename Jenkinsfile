pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                sh 'aws s3 cp public s3://breannachase.net --recursive' 
            }
        }
    }
}
