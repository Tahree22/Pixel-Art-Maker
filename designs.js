// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const canvas = $('#pixelCanvas');

const colorPicker = $('#colorPicker');

// clicking the submit button

$('#sizePicker').submit(function(event) {

  event.preventDefault(); // preventing the grid from appering
  makeGrid(); // creating the grid

});



// making the grid

function makeGrid(){

  canvas.children().remove(); // erases the previous grid

  let gridHeight = $('#inputHeight').val(); 

  let gridWidth = $('#inputWeight').val();  



  // the loop

  for (let i = 1; i <= gridHeight; i++) {

    canvas.append('<tr></tr>'); // to make rows



    for (let j = 1; j <= gridWidth; j++) {

      canvas.children().last().append('<td></td'); // adding columns

      $('td').addClass('cells visible_grids'); //to target cells

    }

  }



    // clicking the grid's cell - filling the cell with colour

    $('.cells').click(function() {

      let color = colorPicker.val();

      $(this).css('background-color', color);

    });



  }

// Your code goes here!
