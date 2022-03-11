# 123reg-to-dnscontrol
Exports DNS records from [123 Reg](https://www.123-reg.co.uk) to [DnsControl](https://stackexchange.github.io/dnscontrol/) format

## Instructions

Read through the script to confirm for yourself that it does nothing malicious. All it does is to get the info from the page and log it to your console.

1. Login to your 123-reg control panel.
2. Manage the domain you want to get entries from.
3. Go to "Manage DNS (A, MX, CNAME, TXT, SRV)".
4. Click on the "Advanced DNS" tab.
5. Open the Developer tools in your browser (common shortcuts include F12 or Ctrl+Shift+I).
6. Click on the "Console" tab in developer tools.
7. Copy and paste the above script.
8. The output to the console should be in DnsControl file format.

## Credit
Inspired by, and heavily copied from https://github.com/biinari/zonefile-extract
