Technologies and Languages used: HTML, CSS, Javascript, jQuery, JSON, npm, node, font-awesome, DOM

![Output sample](https://github.com/dear-s/Search-UI-tool/blob/master/screen_recording.gif)

How to run:
2 methods!!
1. Running "html_neeva.html" will work just fine and for analytics - consider using the console alongside the webpage. After entering the search term in the searchbox, press enter and search will start. Try experimenting with clicking on top heading (h1 element) or search results. Explore or hover on search items!
2. Download the files in one folder, Go to that folder in the command line/terminala and run the command "npm run serve" -- Localhost will pop up and webpage will start. later on open the "html_neeva.html" file from the web browser.

This file contains:
>> html_neeva.html - Structure of the webpage (simply run this file in the browser (preferably Chrome) to access the project)
>> js_neeva.js - It stores the working of the project and linked with the html file. No need to run it separately.
>> css_neeva.css - This has all the styling of HTML elements.
>> Rest are json files.


Modifications I have made:
1. I have put all the JSON files on github to get rid of CORS error getting in the console. It's running fine now because of the github's https URL. I have posted this in a repository - I will take it down once I get this assignment reviewed by you. The links are in the code. I haven't mentioned anything in that github's repository since I am not supposed to push anything on Github.

2. Introduced category (json files) wise output - I have separately printed out the outputs and mentioned from which category this search result is coming from.

3. Used <pre> tags for adjusting the output of search results.

4. For Additional features - I have included alerts and console.logs in the code to tell user where it's extracting clicks from. I have added click alerts on h1 element and search results. I have also set two pointers for both of these features.

5. If searched text not in the matching_terms, it will simply prompt the user to enter the text to search again.

6. It's in the order of searching through files and then going through them in linearly. I haven't introduced any ranking but can be done through applying the most recent or introducing importance.


Approach:

In the javascript file, first I loaded the json files from the github link where I have posted those 5 json files and later, extracted the search term from the matching_term. I have made an array where I am storing all the matching terms as well and then checking at the end from it - whether it can be found in the database or not!

I am using onClick function to keep the track of clicks on 'h1' element and search results which are 'pre' elements.

I am also using "on Enter feature" to start the search once user enter the text in the search box.


Additional improvements:

Can also introduce Search-UI which is a React library. Half of the manual work will be handled easily from this.
