https://www.youtube.com/watch?v=LxAEHnTPFOQ

Understand what's going on there... when you take the test. 
Brian Swiger -> @CodeBeing 

Always set Alias (CNAME) that resolves to awverify.website.azurewebsites.net 

Always create a cname record that resolves to the special awverify subdomain. Azure will validate that you own the domain and can make changes to the DNS zone file. 
You could point it directly to webapp.azurewebsites.net but it would point people to the webapp before verification. 

For https domain name usage redirect in web.config appendQueryString and the redirect type should be permanent. 



