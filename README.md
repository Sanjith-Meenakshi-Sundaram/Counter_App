# Counter_App
## Date: 10/7/2025
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Counter</title>
    <link rel="stylesheet" href="color.css">
</head>
<body class="whole">
    <div class="container">
        <h1>Character Counter</h1>
        <textarea name="area" id="area" placeholder="Type here..."></textarea>
        <p><strong id="counter">0/20</strong></p>
    </div>
    <script src="src.js"></script>
</body>
</html>
```
## CSS Code:
```
.exceeded{
    color: red;
}
.container{
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-family: 'Times New Roman', Times, serif;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 400px;
    margin: auto;
    margin-top: 200px;
}
.whole{
    background-color: black;
}
#area{
  width: 100%;
  height: 120px;
  font-size: 16px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  resize: none;
}
#counter{
  margin-top: 10px;
  font-weight: bold;
}
```
## JS Code:
```
const textarea=document.getElementById('area');
const counters=document.getElementById('counter');
const maxchar=20;
textarea.addEventListener("input",()=>{
    const current=textarea.value.length;
    counters.textContent=`${current}/${maxchar} characters`;
    if(current>=maxchar){
        counters.classList.add("exceeded");
    }
    else{
        counters.classList.remove("exceeded");
    }
})
```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dcd24697-50be-4f72-a5e0-6f83fc61477e" />


## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
