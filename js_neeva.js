
$(document).ready(function () {
  $.getJSON('https://raw.githubusercontent.com/dear-s/data-temporary-rep/master/calendar.json', function (calendar_data) {
    calendar_json_format = calendar_data;
  });
});

$(document).ready(function () {
  $.getJSON('https://raw.githubusercontent.com/dear-s/data-temporary-rep/master/contacts.json', function (contacts_data) {
    contacts_json_format = contacts_data;
  });
});
  

$(document).ready(function () {
  $.getJSON('https://raw.githubusercontent.com/dear-s/data-temporary-rep/master/dropbox.json', function (dropbox_data) {
    dropbox_json_format = dropbox_data;
  });
});

$(document).ready(function () {
  $.getJSON('https://raw.githubusercontent.com/dear-s/data-temporary-rep/master/slack.json', function (slack_data) {
    slack_json_format = slack_data;
  });
});

$(document).ready(function () {
  $.getJSON('https://raw.githubusercontent.com/dear-s/data-temporary-rep/master/tweet.json', function (tweet_data) {
    tweet_json_format = tweet_data;
  });
});
  
var all_matching_terms = [];


// need to make it work - search on enter
$("input[type='text']").keypress(function(event){
    // this is for enter keypress
      if(event.which === 13){
          // hit enter - code
          // give out the search results
          console.log("enter is hit");
          // extract the INPUT
          var getInputText = document.getElementById('searchedText').value;
          console.log("input Text got from search: " + getInputText);

          // reset the HTML content - to stop repeating outputs
          document.getElementById("div1").innerHTML = "";
          document.getElementById("div2").innerHTML = "";
          document.getElementById("div3").innerHTML = "";
          document.getElementById("div4").innerHTML = "";
          document.getElementById("div5").innerHTML = "";

          // start searching this term in all the json files
          // search getInputText in all the json files

          // search in calendar
          get_calendar_array = calendar_json_format["calendar"];
          for(arr=0;arr<get_calendar_array.length;arr++){
            dictionary = get_calendar_array[arr];
            for (var key in dictionary){
              if(key === "matching_terms"){
                var paragraph = document.getElementById("div1");

                // traverse this array
                for(m_t = 0;m_t<dictionary["matching_terms"].length;m_t++){
                  all_matching_terms.push(dictionary["matching_terms"][m_t]);
                  if(dictionary["matching_terms"][m_t] === getInputText){
                    // print the whole dictionary for now
                    new_to_add = JSON.stringify(dictionary, undefined, 2);
                    var text = document.createTextNode(new_to_add)
                    // paragraph.appendChild(text);

                    // polish data - make it readable
                    meeting_title = dictionary["title"];
                    invitees = dictionary["invitees"];
                    raw_date = dictionary["date"];
                    date_time = raw_date.split(' ');
                    exact_date = date_time[0];

                    // make a message to print
                    string_message = "Meeting to attend: " + meeting_title + "\nPeople to invite: " + invitees + "\nDate: " + exact_date;
                    var polished_text = document.createTextNode(string_message);
                    paragraph.appendChild(polished_text);

                    new_line_string = "\n" + "\n"
                    var new_line = document.createTextNode(new_line_string);
                    paragraph.appendChild(new_line);


                  }
                }
              }
            }
          }

          // search in contacts
          get_contacts_array = contacts_json_format["contacts"];
          for(arr=0;arr<get_contacts_array.length;arr++){
            dictionary = get_contacts_array[arr];
            for (var key in dictionary){
              if(key === "matching_terms"){
                var paragraph = document.getElementById("div2");

                // traverse this array
                for(m_t = 0;m_t<dictionary["matching_terms"].length;m_t++){
                  all_matching_terms.push(dictionary["matching_terms"][m_t]);
                  if(dictionary["matching_terms"][m_t] === getInputText){
                    // print the whole dictionary for now
                    new_to_add = JSON.stringify(dictionary, undefined, 2);
                    var text = document.createTextNode(new_to_add)
                    // paragraph.appendChild(text);

                    // polish data - make it readable
                    full_name = dictionary["name"];
                    company = dictionary["company"];
                    emails = dictionary["emails"];
                    phones = dictionary["phones"];
                    last_contact = dictionary["last_contact"];

                    // make a message to print
                    string_message = "Full Name: " + full_name + "\nName of the company: " + company + "\nEmails: " + emails + "\nContact numbers: " + phones + "\nLast contact happened: " + last_contact;
                    var polished_text = document.createTextNode(string_message);
                    paragraph.appendChild(polished_text);

                    new_line_string = "\n" + "\n"
                    var new_line = document.createTextNode(new_line_string);
                    paragraph.appendChild(new_line);
                  }
                }
              }
            }
          }

          // search in dropbox
          get_dropbox_array = dropbox_json_format["dropbox"];
          for(arr=0;arr<get_dropbox_array.length;arr++){
            dictionary = get_dropbox_array[arr];
            for (var key in dictionary){
              if(key === "matching_terms"){
                var paragraph = document.getElementById("div3");

                // traverse this array
                for(m_t = 0;m_t<dictionary["matching_terms"].length;m_t++){
                  all_matching_terms.push(dictionary["matching_terms"][m_t]);
                  if(dictionary["matching_terms"][m_t] === getInputText){
                    // print the whole dictionary for now
                    new_to_add = JSON.stringify(dictionary, undefined, 2);
                    var text = document.createTextNode(new_to_add)
                    // paragraph.appendChild(text);

                    // polish data - make it readable
                    path = dictionary["path"];
                    title = dictionary["title"];
                    shared_with = dictionary["shared_with"];
                    created_on = dictionary["created_on"];

                    // make a message to print
                    string_message = "Path of the file in the dropbox: " + path + "\nTitle of the file: " + title + "\nPeople it is shared with: " + shared_with + "\nCreated On: " + created_on;
                    var polished_text = document.createTextNode(string_message);
                    paragraph.appendChild(polished_text);

                    new_line_string = "\n" + "\n"
                    var new_line = document.createTextNode(new_line_string);
                    paragraph.appendChild(new_line);
                  }
                }
              }
            }
          }


          // search in slack
          get_slack_array = slack_json_format["slack"];
          for(arr=0;arr<get_slack_array.length;arr++){
            dictionary = get_slack_array[arr];
            for (var key in dictionary){
              if(key === "matching_terms"){
                var paragraph = document.getElementById("div4");

                // traverse this array
                for(m_t = 0;m_t<dictionary["matching_terms"].length;m_t++){
                  all_matching_terms.push(dictionary["matching_terms"][m_t]);
                  if(dictionary["matching_terms"][m_t] === getInputText){
                    // print the whole dictionary for now
                    new_to_add = JSON.stringify(dictionary, undefined, 2);
                    var text = document.createTextNode(new_to_add)
                    // paragraph.appendChild(text);

                    // polish data - make it readable
                    slack_channel = dictionary["channel"];
                    author = dictionary["author"];
                    message = dictionary["message"];
                    timestamp = dictionary["timestamp"];
                    date_time = timestamp.split(' ');
                    exact_date = date_time[0];

                    // make a message to print
                    string_message = "Slack channel: " + slack_channel + "\nAuthor of the message: " + author + "\nMessage: " + message + "\nFrom: " + exact_date;
                    var polished_text = document.createTextNode(string_message);
                    paragraph.appendChild(polished_text);

                    new_line_string = "\n" + "\n"
                    var new_line = document.createTextNode(new_line_string);
                    paragraph.appendChild(new_line);
                  }
                }
              }
            }
          }

          // search in tweet
          get_tweet_array = tweet_json_format["tweet"];
          for(arr=0;arr<get_tweet_array.length;arr++){
            dictionary = get_tweet_array[arr];
            for (var key in dictionary){
              if(key === "matching_terms"){
                var paragraph = document.getElementById("div5");

                // traverse this array
                for(m_t = 0;m_t<dictionary["matching_terms"].length;m_t++){
                  all_matching_terms.push(dictionary["matching_terms"][m_t]);
                  if(dictionary["matching_terms"][m_t] === getInputText){
                    // print the whole dictionary for now
                    new_to_add = JSON.stringify(dictionary, undefined, 2);
                    var text = document.createTextNode(new_to_add)
                    // paragraph.appendChild(text);

                    // polish data - make it readable
                    user = dictionary["user"];
                    message = dictionary["message"];
                    date = dictionary["timestamp"];

                    // make a message to print
                    string_message = "Twitter username: " + user + "\nTweet from the user: " + message + "\nTimestamp: " + date;
                    var polished_text = document.createTextNode(string_message);
                    paragraph.appendChild(polished_text);

                    new_line_string = "\n" + "\n"
                    var new_line = document.createTextNode(new_line_string);
                    paragraph.appendChild(new_line);
                  }
                }
              }
            }
          }

          check_presence = false;
          for(var j=0;j<all_matching_terms.length;j++){
            if(all_matching_terms[j] == getInputText){
              check_presence = true;
            }
          }

          if (check_presence == false){
            alert("No such term found in the database! Try Again!");
          }



     };
});