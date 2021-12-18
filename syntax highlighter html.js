//fixe M-2 @comment


var syntaxHighLighterMarker = function (below_c_, disable) {
 //  below_c_  = <String> or <Element> **   value to be highlighted
 // disable = <Boolean>  **   disable syntax highlighting 
   
   if(disable instanceof Boolean === false){
    
   }
   
    var obj = {
        error:false,
        value:null
    };
    
    if(below_c_ instanceof Object === false || 'object' !== typeof below_c_){
      below_c_ = {
        value:below_c_
      }
    }
    
    
    below_c_.value = below_c_.value||below_c_.innerHTML;
    
    var error = error||function () {
        obj.error=true;
    }

   // try {
    //    disable = eval(disable);
   // } catch (e) {
    //    disable = false;
     //   error();
 //   }

    var ender = function (e) {
        var extract__val = e.value.replace(/±/g, '').replace(/€/g, '').replace(/©/g, '&lt;').replace(/®/g, '&gt;').replace(/•/g, '').replace(/°/g, '').replace(/✳/g, '--&gt;').replace(/;/g, '$&').replace(/p&semi;/g, '$&');
        var total_set_val = extract__val;
        //e.value = `<m-ln>${total_set_val}<m-end></m-end></m-ln>`
        e.value = `${total_set_val}<m-end></m-end>`
        return e;
    };

    below_c_ = ('string' == typeof below_c_ ? { value: below_c_ } : below_c_);

    var varㅤ  = below_c_.value.replace(/©/g, '◻');
    varㅤ  = varㅤ .replace(/®/g, '◻');
    varㅤ  = varㅤ .replace(/¤/g, '◻');
    varㅤ  = varㅤ .replace(/€/g, '◻').replace(/•/g, '◻').replace(/°/g, '◻').replace(/±/g, '◻');

    below_c_.value = varㅤ ;

    /*highting*/
     varㅤ = below_c_.value.replace(/&/gi, '&amp;').replace(/\+/gi, '&plus;').replace(/\\/g, '&bsol;').replace(/1/g, '1');

    varㅤ = varㅤ.replace(/</g, '©');
    varㅤ = varㅤ.replace(/>/g, '®').replace(/--®/g, '✳').replace(/\n/img, '$&');
    varㅤ = varㅤ.replace(/([\n])/g, '<m-break></m-break><br/>').replace(/\s/g, '<m-space>$&</m-space>€').replace(/©+\/+style*®/gim, '<m-invisible>®</m-invisible>$&').replace(/©+\/+script*®/gim, '<m-invisible>®</m-invisible>$&');
   // varㅤ = varㅤ.replace(/([\n])/g, '<m-break></m-break></m-ln><br/><m-ln>').replace(/\s/g, '<m-space>$&</m-space>€').replace(/©+\/+style*®/gim, '<m-invisible>®</m-invisible>$&').replace(/©+\/+script*®/gim, '<m-invisible>®</m-invisible>$&');
    /*.replace(/\s\s\s/g,' &nbsp ').replace(/\s/g,'&nbsp;');      */
    ;;
    obj.value = varㅤ;
    if (disable) {
        return ender(obj);
    }

    varㅤ = varㅤ.replace(/©+[a-zA-Z0-9\/]*[^®!\n✳]*[\w0-9"=\._#'/\\\s€ ]+®/g, '(_<_)$&(_>_)').replace(/©+![\w][^®]*®/g, '<m-4>(_<_)$&(_>_)</m-4>');

    varㅤ = varㅤ.replace(/[(]+_+<+_+[)]+©+[a-zA-Z0-9\/!\s]*/g, '$&(_^_)');
    varㅤ = varㅤ.replace(/[a-zA-Z0-9/\s]*®+[(]+_+>+_+[)]/g, '(_^^_)$&');

    //comment
    varㅤ = varㅤ.replace(/©!--+[^✳]/g, '•$&').replace(/✳/g, '$&°');
    varㅤ = varㅤ.replace(/•+©+!--*[^°]/g, '<m-2>$&').replace(/✳/g, '$&</m-2>');

    varㅤ = varㅤ.replace(/\(_<_\)/g, '<m-1>');
    varㅤ = varㅤ.replace(/\(_\^_\)/g, '</m-1><m-3>');

    varㅤ = varㅤ.replace(/\(_>_\)/g, '</m-1>');
    varㅤ = varㅤ.replace(/\(+_+\^+\^+_+\)/g, '</m-3><m-1>');
    varㅤ = varㅤ.replace(/<m-1>+©+style+<\/m-1>+<m-3>*[^®]+<\/m-3>+<m-1>+[^®]*®<\/m-1>/gim, '$&<m-css><m-checker>');
    varㅤ = varㅤ.replace(/<m-1>+©+\/style+<\/m-1>+<m-3>*[^®]+<\/m-3>+<m-1>+[^®]*®<\/m-1>/gim, '</m-checker></m-css>$&');
    varㅤ = varㅤ.replace(/<m-1>+©+script+<\/m-1>+<m-3>*[^®]+<\/m-3>+<m-1>+[^®]*®<\/m-1>/gim, '$&<m-js><m-checker>');
    varㅤ = varㅤ.replace(/<m-1>+©+\/script+<\/m-1>+<m-3>*[^®]+<\/m-3>+<m-1>+[^®]*®<\/m-1>/g, '</m-checker></m-js>$&');

    varㅤ = varㅤ.replace(/<m-1>+©+\/+style+[^]*\(%style\)/gim, '$&');
    varㅤ = varㅤ.replace(/<m-1>+©+\/+script+[^]*\(%script\)/gim, '$&');
    varㅤ = varㅤ.replace(/\(%script\)/g, '').replace(/\(%style\)/g, '');
    obj.value = varㅤ;

    return ender(obj);
}



/*** ***/

  var test = syntaxHighLighterMarker(`hey you`)
  
  console.log(test);