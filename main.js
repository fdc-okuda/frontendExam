$(document).ready(function(){
    
    function game(){

        var arr = [];
        var arr_cpu = [];

        $(".rock").on("click", function(){
            $(".fist").css({
                'opacity': '100'
            });
            arr.unshift("1");
        })
        $(".paper").on("click", function(){
            $(".hand").css({
                'opacity': '100'
            });
            arr.unshift("2");
        })
        $(".scissors").on("click", function(){
            $(".cross").css({
                'opacity': '100'
            });
            arr.unshift("3");
        })

        $(".fight").on("click", function(){
            if (arr.length == 0){
                alert("Please choose your command.");
            } else {
                function a(){ 
                    $(".cross-cpu").css({
                        'opacity': '100'
                    });
                    arr_cpu.unshift("4");
                }
                function b(){ 
                    $(".hand-cpu").css({
                        'opacity': '100'
                    });
                    arr_cpu.unshift("5");
                }
                function c(){ 
                    $(".fist-cpu").css({
                        'opacity': '100'
                    });
                    arr_cpu.unshift("6");
                }
                func = ["a","b","c"];
                n = Math.floor(Math.random()*3);
                eval(func[n])();

                function result(){
                    if(arr[0] == "1" && arr_cpu[0] == "4"){
                        $(".fist").css({
                            'opacity': '0'
                        });
                        $(".cross-cpu").css({
                            'opacity': '0'
                        });
                        $(".circle").css({
                            'opacity': '100'
                        });
                        $(".xmark-cpu").css({
                            'opacity': '100'
                        });
                    }
                    if(arr[0] == "1" && arr_cpu[0] == "5"){
                        $(".fist").css({
                            'opacity': '0'
                        });
                        $(".hand-cpu").css({
                            'opacity': '0'
                        });
                        $(".xmark").css({
                            'opacity': '100'
                        });
                        $(".circle-cpu").css({
                            'opacity': '100'
                        });
                    }
                    if(arr[0] == "1" && arr_cpu[0] == "6"){
                        $(".fist").css({
                            'opacity': '0'
                        });
                        $(".fist-cpu").css({
                            'opacity': '0'
                        });
                        $(".equals").css({
                            'opacity': '100'
                        });
                        $(".equals-cpu").css({
                            'opacity': '100'
                        });
                    }
                    if(arr[0] == "2" && arr_cpu[0] == "4"){
                        $(".hand").css({
                            'opacity': '0'
                        });
                        $(".cross-cpu").css({
                            'opacity': '0'
                        });
                        $(".xmark").css({
                            'opacity': '100'
                        });
                        $(".circle-cpu").css({
                            'opacity': '100'
                        });
                    }
                    if(arr[0] == "2" && arr_cpu[0] == "5"){
                        $(".hand").css({
                            'opacity': '0'
                        });
                        $(".hand-cpu").css({
                            'opacity': '0'
                        });
                        $(".equals").css({
                            'opacity': '100'
                        });
                        $(".equals-cpu").css({
                            'opacity': '100'
                        });
                    }
                    if(arr[0] == "2" && arr_cpu[0] == "6"){
                        $(".hand").css({
                            'opacity': '0'
                        });
                        $(".fist-cpu").css({
                            'opacity': '0'
                        });
                        $(".circle").css({
                            'opacity': '100'
                        });
                        $(".xmark-cpu").css({
                            'opacity': '100'
                        });
                    }
                    if(arr[0] == "3" && arr_cpu[0] == "4"){
                        $(".cross").css({
                            'opacity': '0'
                        });
                        $(".cross-cpu").css({
                            'opacity': '0'
                        });
                        $(".equals").css({
                            'opacity': '100'
                        });
                        $(".equals-cpu").css({
                            'opacity': '100'
                        });
                    }
                    if(arr[0] == "3" && arr_cpu[0] == "5"){
                        $(".cross").css({
                            'opacity': '0'
                        });
                        $(".hand-cpu").css({
                            'opacity': '0'
                        });
                        $(".circle").css({
                            'opacity': '100'
                        });
                        $(".xmark-cpu").css({
                            'opacity': '100'
                        });
                    }
                    if(arr[0] == "3" && arr_cpu[0] == "6"){
                        $(".cross").css({
                            'opacity': '0'
                        });
                        $(".fist-cpu").css({
                            'opacity': '0'
                        });
                        $(".xmark").css({
                            'opacity': '100'
                        });
                        $(".circle-cpu").css({
                            'opacity': '100'
                        });
                    }
                }

                // function end(){
                //     location.reload();
                // }

                

                setTimeout(result, 1000);
                // setTimeout(end, 2500);
                wait();
            }
        });

        $(".clear").on("click", function(){
            location.reload()
        });

        // $(".rock").on("click", function(){
        //     if(arr.length == 1 && arr_cpu.length == 1){
        //         alert("Please push Clear.");
        //     }
        // });

        function wait(){
            if(arr.length == 1){
                $(".rock").on("click", function(){
                    alert("Please push Clear.");
                    $(".fist").css({
                        'opacity': '0'
                    });
                });
                $(".paper").on("click", function(){
                    alert("Please push Clear.");
                    $(".hand").css({
                        'opacity': '0'
                    });
                });
                $(".scissors").on("click", function(){
                    alert("Please push Clear.");
                    $(".cross").css({
                        'opacity': '0'
                    });
                });
                $(".fight").on("click", function(e){
                    alert("Please push Clear.");
                    e.preventDefault()
                });
            }
        }

    }

game();


    



});