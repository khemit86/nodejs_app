pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
      }
    }
    
    stage('Test') {
      steps {
        echo 'Testing'
      }
    }
    
    stage('Deploy') {
      steps {
        echo 'Deploy'
      }
    }
  }
}
