pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'node -v'
        bat 'npm -v'
        bat 'npm install'
        bat 'node index.js'
      }
    }
    
    stage('Test') {
      steps {
        bat 'npm run test'
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
