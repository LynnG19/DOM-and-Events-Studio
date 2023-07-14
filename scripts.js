window.addEventListener("load", function () {
    let status = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");
    let takeoff = document.getElementById("takeoff");
    let land = document.getElementById("landing");
   // let rocket = documnet.getElementById("rocket");
    let ship = documnet.getElementById("ship");
    let up = documnet.getElementById("up");
    let down = documnet.getElementById("down");

    takeoff.addEventListener("click", function (event) {
        window.confirm("Confirm that the shuttle is ready for takeoff.")
        status.innerHTML = "Shuttle in flight";
        console.log("Shuttle in flight");
        shuttleBackground.style.backgroundColor = "blue";
        height.innerHTML = parseInt("10000");
        console.log(parseInt("10000"));
    });


    land.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        console.log("The shuttle has landed.");
        shuttleBackground.style.backgroundColor = "green";
        height.innerHTML = parseInt("0");
        console.log(parseInt("0"));


    });

    land.addEventListener("click", function (event) {
        window.alert("Confirm that you want to abort the mission");
        status.innerHTML = "Mission aborted.";
        console.log("Mission aborted.");
        shuttleBackground.style.backgroundColor = "green";
        height.innerHTML = parseInt("0");
        console.log(parseInt("0"));

    });

    up.addEventListener("click", function () {
        ship.style.top = (parseInt(ship.style.top) - 10) + "px";

    });

    down.addEventListener("click", function () {
        ship.style.top = (parseInt(ship.style.top) + 10) + "px";

    });


});

// Remember to pay attention to page loading!
