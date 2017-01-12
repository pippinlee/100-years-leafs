function ConvertAcronym(acr) {
  	switch (acr) {
  		case "CAN":
  			return "Canada";
  			break;
  		case "USA":
  			return "UnitedStates";
  			break;
  		case "GBR":
  			return "GreatBritain";
  			break;
  		case "FIN":
  			return "Finland";
  			break;
  		case "RUS":
  			return "Russia";
  			break;
  		case "SWE":
  			return "Sweden";
  			break;
  		case "CZE":
  			return "CzechRepublic";
  			break;
  		case "SVK":
  			return "Slovakia";
  			break;
  		case "UKR":
  			return "Ukraine";
  			break;
  		case "KAZ":
  			return "Kazakhstan";
  			break;
  		case "POL":
  			return "Poland";
  			break;
  		case "BHS":
  			return "Bahamas";
  			break;
  		case "DEU":
  			return "Germany";
  			break;
  		case "CHE":
  			return "Switzerland";
  			break;
  		case "EST":
  			return "Estonia";
  			break;
  		case "AUT":
  			return "Austria";
  			break;
  		case "ROU":
  			return "Romania";
  			break;
  		case "DNK":
  			return "Denmark";
  			break;
      case "BLR":
        return "Belarus";
        break;
  		default:
  			console.log('no acronym: ' + acr);
  			break;		
  	}
  }

  module.exports = ConvertAcronym;