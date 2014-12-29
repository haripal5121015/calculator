var value1,value2,flag,calresul,f1,f5,bodmoasflag;
	value1=0;
	value2=0;
	bodmoasflag=0;
	f5=0;

		flag=0;
		calresult=0;
	
	
	function insert(arg)
	{
		

if(f5===1&&flag===0)
{
	document.getElementById("resultbox").value=" ";
	document.getElementById("resultbox").value=arg;
	value1=0;
	f5=0;

}
	

		
		if (flag===0) 
			{
				value1=Number(value1)*10+ Number(arg);
				document.getElementById("resultbox").value=value1;
			}
			else
			{
				value2=Number(value2)*10+Number(arg);
				document.getElementById("resultbox").value=document.getElementById("resultbox").value+arg;
			}
			//alert(arg);


	}
	
	
	function resultsum()
	{
		f5=1;

		

		if(f1===1)
		calresult=Number(value1)+Number(value2);
	if(f1===2)
		calresult=Number(value1)-Number(value2);
	if(f1===3)
		calresult=Number(value1)*Number(value2);
	document.getElementById("resultbox").value=calresult;
	if(f1===4)
	{
		if(value2==0)
		{
			document.getElementById("resultbox").value="denominatore can not be zero";
		}
		else
		{
		calresult=Number(value1)/Number(value2);
		document.getElementById("resultbox").value=calresult;
	    }
	}
	

		
		
	value1=calresult;
	value2=0;
	flag=0;
	
   }
	function operator(op)
	{
		bodmoasflag=1;
		f1=op;
		flag=1;
		if(op===1)
			document.getElementById("resultbox").value=document.getElementById("resultbox").value+"+";
		if(op===2)
			document.getElementById("resultbox").value=document.getElementById("resultbox").value+"-";
		if(op===3)
			document.getElementById("resultbox").value=document.getElementById("resultbox").value+"*";
		if(op===4)
			document.getElementById("resultbox").value=document.getElementById("resultbox").value+"/";
		
		//calresult=Number(value2)-Number(value1);
	
		//value2=0;
	}
	
	function clear6()
	{
		document.getElementById("resultbox").value=" ";
		value1=0;
		value2=0;
		flag=0;
		calresult=0;
		f5=0;
		//alert("jsghas");
	}
var top;
var stack=[];
top=-1;
function saveresult()
{

stack[++top]=document.getElementById("resultbox").value;
}
function backbuttonresult()
{
	if(top>=0)
	document.getElementById("resultbox").value=stack[top--];

}