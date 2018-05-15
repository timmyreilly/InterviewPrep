
# Fast AI with cuda: 

http://course.fast.ai/lessons/lesson1.html 

Let's do ai! 

Create a VM with a Nvidia GPU
Looks like Azure only supports GPU on Windows Server. 

You have to go to two pages to see what's available and navigating the portal for GPU is super dumb. 

Boom someone already did this for Azure: 
http://wiki.fast.ai/index.php/Azure_install 
These directions pretty much work as of 5/9

Okay now we're on medium: 
https://medium.com/@abhikprince/setting-up-an-azure-vm-for-deep-learning-bb76b453272b 



Now: 
git clone https://github.com/fastai/courses.git

Fix the file paths: from his gist: 
wget http://files.fast.ai/files/nbs/utils.zip 

And install open cv: 
conda install opencv 

// Let's try this all again with a new VM. 

Hit the plus sign in the Azure Portal: 
Search Ubuntu 16
16.04 as of 5/10
