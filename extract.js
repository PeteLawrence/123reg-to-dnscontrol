// CONFIG BEGIN
var defaultTTL = 300;
var providerName = 'R53_MAIN';
// CONFIG END

var domain = document.getElementsByTagName('select')[0].value;
var table = document.getElementsByClassName('advanced_dns')[0];
var rows = table.getElementsByTagName('tr');
var i, len, row;
var hostname, type, priority, ttl, destination;
var output = '';

output += 'D("' + domain + '", REG_NONE, DnsProvider(' + providerName + '),\n';
for (i = 1, len = rows.length - 2; i < len; i++) {
    row = rows[i];
    hostname = row.getElementsByClassName('dns_hostname')[0].innerText;
    type = row.getElementsByClassName('dns_type')[0].innerText;
    priority = row.getElementsByClassName('dns_priority')[0].innerText;
    ttl = row.getElementsByClassName('dns_ttl')[0].innerText || defaultTTL;
    destination = row.getElementsByClassName('dns_data')[0].title;
  
    if (type === 'TXT/SPF') {
      type = 'TXT';
    }

    if (type === "MX") {
        output += "\t" + type + "('" + hostname + "', " + priority + ", '" + destination + "'),\n";
    } else {
        output += "\t" + type + "('" + hostname + "', '" + destination + "'),\n";
    }
}

output = output.substring(0, output.length - 2) + "\n)"; //remove trailing comma and new line, and add a closing bracket

console.log(output);
