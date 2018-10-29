function convertScoreToGradeWithPlusAndMinus(score) {
  if(score <= 100 && score >= 90){
    if(score === 90 || score === 91 || score === 92){
      return "A-"
    } else if(score === 98 || score === 99 || score === 100){
      return "A+"
    } else {
      return "A"
    }
  } else if(score <= 89 && score >= 80){
    if(score === 80 || score === 81 || score === 82){
      return "B-"
    } else if(score === 88 || score === 89){
      return "B+"
    } else {
      return "B"
    }
  } else if(score <= 79 && score >= 70){
    if(score === 70 || score === 71 || score === 72){
      return "C-"
    } else if(score === 78 || score === 79){
      return "C+"
    } else {
      return "C";
    } 
   }else if(score <= 69 && score >= 60){
      if(score === 60 || score === 61 || score === 62){
        return "D-"
      } else if(score === 68 || score === 69){
        return "D+"
      } else {
        return "D"
      }
      } else if(score <= 59 && score >= 0){
        return "F"
      } 
      else {
        return "INVALID SCORE";
      }
    }
  
