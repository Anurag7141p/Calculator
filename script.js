//----------------------------- 1-display number in text box

function displayNum(num) 
{

    document.getElementById('result').value += num;
    // console.log(num)
    // result.value += num;

}


//------------------------------ 2-clear box


function clearBox() 
{
    result.value = '';
}

//------------------------------- 3- evaluate expression 


function evaluateExpression() 
{
    expression = result.value
    output = eval(expression)
    result.value = output      // document.getElementById('result').value=output

    // result.value=eval(result.value)


}

//-------------------------------- 4- remove last item from textbox

function removeLast() 
{
    currentExp = result.value
    result.value = currentExp.slice(0, -1)
}