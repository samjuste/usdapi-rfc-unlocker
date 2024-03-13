const woField = document.getElementById('search-workorder');

var prevClassState = woField.classList.contains('disabled');
var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if(mutation.attributeName == "class"){
                            var currentClassState = mutation.target.classList.contains('disabled');
                            if(prevClassState !== currentClassState)    {
                                prevClassState = currentClassState;
                                if(currentClassState){
                                    console.log("class added!");
                                    woField.classList.remove('disabled');
                                }
                                else 
                                    console.log("class removed!");
                            }
                        }
                    });
                });
observer.observe(woField, {attributes: true});

