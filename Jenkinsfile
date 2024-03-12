pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'index.js'
        echo 'Building'
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
