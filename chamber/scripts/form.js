function setTimestamp(){let timestampField=document.getElementById("timestampField"),now=new Date;timestampField.value=now.toISOString()}window.onload=setTimestamp;