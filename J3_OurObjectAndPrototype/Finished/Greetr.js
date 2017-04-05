(function(global, $) {
  // Teeb uue objekti nimega Greetr mille väärtus on funktsioon
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    // prototüüp hoiab objekti meetodeid
    Greetr.prototype = {};
    // tegelik objekt tehakse siin, lubamaks teha uut objekti ilma "new" kasutamata
    Greetr.init = function(firstName, lastName, language) {
        // muutuja self viitab sellele objektile
        var self = this;
		// muudab selle objekti muutuja "firstName" sisendiks (firstName) või vaikimisi väärtuseks ''
        self.firstName = firstName || '';
		// sama lastNameiga
        self.lastName = lastName || '';
		// sama languageiga, vaikimisi en
        self.language = language || 'en';
        
    }
    // muudab objekti nii, et selle tegemiseks ei pea kasutama new võtmesõna
    Greetr.init.prototype = Greetr.prototype;
    //kinnitab Greetr globaalsele objektile ja annab lühendi $G
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));