/*jshint unused:false */

(function(exports) {

    'use strict';

    var ref = new Wilddog("https://managelife.wilddogio.com/");
    exports.wdsync = {
        updateData:function(value){
            console.log('update wilddog');
            if(ref.getAuth()){
                var uid = ref.getAuth().uid;
                ref.child(uid).update(value);
            }
            
            // console.log(uid);
            
        },
        fetchData:function(key){

        }

    };


})(window);
