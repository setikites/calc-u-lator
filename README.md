calc-u-lator
============

These HTML5 applications are designed for older versions of Blackberry.
http://developer.blackberry.com/html5/

To compile these applications:
1. make sure the config.xml is correct
2. create a zip archive of the contents of the app directory

   cd tipCalcApp; zip *

3. compile the zip archive into a BBY program and sign it

   C:\Program Files (x86)\Research In Motion\BlackBerry WebWorks SDK 2.3.1.5>bbwp tipCalcApp.zip -g <password> -o output

4. load the program using tether cable and java loader

   C:\Program Files (x86)\Research In Motion\BlackBerry WebWorks SDK 2.3.1.5\bin>JavaLoader.exe load tipCalcApp.cod


