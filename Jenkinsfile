pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'node -v'
        bat 'npm -v'
        bat 'npm install'
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
