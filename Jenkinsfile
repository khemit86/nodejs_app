pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'index.js'
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
