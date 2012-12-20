
// *********************************************************************************************
// Program retrieved from http://web.ncf.ca/pat/pdqlib/datelastmod.html
//		on April 18, 2011 by Meghan Rieke. (Original code © Pat Drummond  www.patdrummond.org)
// Modified by Meghan Rieke for the Oklahoma NASA Space Grant Consortium.
// 		http://okspacegrant.ou.edu
// *********************************************************************************************

function last_modified(){

	var mydate = new Date(document.lastModified);
	
	var day = mydate.getDate();
	var month = mydate.getMonth();
	var year = mydate.getFullYear();
	
	var month_name =
	(0==month)?'January':( 1==month)?'February':(2==month)?'March'    :
	(3==month)?'April'  :( 4==month)?'May'     :(5==month)?'June'     :
	(6==month)?'July'   :( 7==month)?'August'  :(8==month)?'September':
	(9==month)?'October':(10==month)?'November':'December';
	
	var formatted_date = month_name + " " + (day<10?"0"+day:day) + ", " + (year<1000?1900+year:year);
	
	var current = 'Error retrieving date.';
	
	//Check if the date is valid.
	if(0 != mydate)
	{
	current = formatted_date;
	}
	
	document.write(current);

}





function formatted_date(mydate){
	var day = mydate.getDate();
	var month = mydate.getMonth();
	var year = mydate.getFullYear();
	
	var month_name =
		(0==month)?'January':( 1==month)?'February':(2==month)?'March'    :
		(3==month)?'April'  :( 4==month)?'May'     :(5==month)?'June'     :
		(6==month)?'July'   :( 7==month)?'August'  :(8==month)?'September':
		(9==month)?'October':(10==month)?'November':'December';

	return "" + month_name + " " + (day<10?"0"+day:day) + " " + (year<1000?1900+year:year);
}


// Get last modified date of this webpage.
function date_lastmod()
{
	var lmd = document.lastModified;
	var current = "Error retrieving date.";
	var date1 = Date.parse(lmd);
	
	//Check if the date is valid.
	if(0 != date1)
	{
		current = "" + formatted_date(new Date(date1));
	}
	
	return current;
}