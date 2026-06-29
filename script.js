document.querySelectorAll('[data-package]').forEach((link)=>{link.addEventListener('click',()=>{const select=document.getElementById('packageSelect');select.value=link.dataset.package;});});
const form=document.getElementById('bookingForm');
const note=document.getElementById('formNote');
form.addEventListener('submit',(event)=>{event.preventDefault();const data=new FormData(form);const addons=data.getAll('addons');const message=[
'New Nova Auto Spaa appointment request',
'',
'Name: '+data.get('name'),
'Phone: '+data.get('phone'),
'Email: '+data.get('email'),
'Package: '+data.get('package'),
'City: '+data.get('city'),
'Add-ons: '+(addons.length?addons.join(', '):'None'),
'Preferred date: '+data.get('date'),
'Preferred time: '+data.get('time'),
'Vehicle make: '+data.get('vehicleMake'),
'Vehicle model: '+data.get('vehicleModel'),
'Address/details: '+(data.get('address')||'')
].join('\n');
const subject='Nova Auto Spaa Booking Request - '+data.get('name');
const mailto='mailto:novaautospaa@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(message);
window.location.href=mailto;
note.textContent='Your email app should open with the appointment request. Please press Send to complete the booking request.';
});