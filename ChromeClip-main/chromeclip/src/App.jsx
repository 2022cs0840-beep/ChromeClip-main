import { useState, useEffect } from "react";
import ClipboardCard from "./ClipboardCard";
import "./clip.css";
import Clip from "./assets/clip.svg";
function App() {
	const arr = [
		{
			content: `@keyframes rainbow {
  0% { color: hsl(0, 100%, 50%); }    /* Red */
  16% { color: hsl(60, 100%, 50%); }   /* Yellow */
  33% { color: hsl(120, 100%, 50%); }  /* Green */
  50% { color: hsl(180, 100%, 50%); }  /* Cyan */
  66% { color: hsl(240, 100%, 50%); }  /* Blue */
  83% { color: hsl(300, 100%, 50%); }  /* Magenta */
  100% { color: hsl(360, 100%, 50%); } /* Back to Red */
}`,
		},
		{
			content: `What we learned
We learned…

Prompt engineering techniques, namely manual chain-of-thought prompting and one-shot learning
How to orchestrate drawings and animations into website design
Integrating different LLMs with each other and have a streamlined pipeline for them to communicate with each other and handle potential errors
How to do video and audio editing through the command line
Making a cool UI :)
What's next for opennote
We want to promote inclusivity in opennote by allow`,
		},
		{
			content: `import pandas as pd
from sklearn.datasets import load_breast_cancer
import matplotlib.pyplot as plt
bd=load_breast_cancer()
df=pd.DataFrame(data=bd.data,columns=bd.feature_names)
bd=df['mean radius']
plt.plot(kind="bar",color="black")
plt.show()`,
		},
		{
			content: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap" rel="stylesheet">`,
		},
		{
			content: `"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."`,
		},
		{
			content: `"The quick brown fox jumps over the lazy dog while the sun sets behind the mountains, casting a golden glow across the vast landscape, as birds chirp melodiously in the distance, the wind gently rustles through the trees, and the world slowly prepares to embrace the tranquility of the approaching night."`,
		},
		{
			content: `VFG may refer to a variety of things, including a force gauge, a variable frequency generator, or a barrel cleaning felt.
VFG as a force gauge
A VFG is a digital force gauge that can be used for tensile and compressive testing. It can be used in production, quality control, and research and development labs. 
The VFG has a touchs`,
		},
		{
			content: `Venkateshwara Fibre Glass (Chennai) Pvt. Ltd

Venkateshwara Fibre Glass (Chennai) Pvt. Ltd
https://www.venkateshwarafibreglass.com
Manufacturer of Fibre Reinforced Plastic Products. For major industrial sectors like Wind Energy, Mass Transportation, Chemical, Paper, Pollution Control and ...`,
		},
		{
			content: `Problem statement

Send feedback
You are given an array 'arr' containing 'n' non-negative integers.



Your task is to partition this array into two subsets such that the absolute difference between subset sums is minimum.



You just need to find the minimum absolute difference considering any valid division of the array elements.



Note:

1. Each array element should belong to exactly one of the subsets.

2. Subsets need not always be contiguous.
For example, for the array : [1, 2, 3], some of the possible divisions are 
   a) {1,2} and {3}
   b) {1,3} and {2}.`,
		},
		{
			content: `int minimizeCost(int n, int k, vector<int>& height) {
    if (n == 1)
        return 0;
    vector<int> dp(n, -1);
    dp[1] = abs(height[1] - height[0]);
    dp[0] = 0;

    for (int i = 2; i < n; i++) {
        int mini = INT_MAX;
        for (int j = 1; j <= k; j++) {
            int index = i - j;
            if (index >= 0) {
                mini = min(mini, dp[index] + abs((height[i] - height[index])));
            }
        }
        dp[i] = mini;
    }
    return dp[n - 1];
}`,
		},
		{
			content: `class Solution {
public:
    int minCost(vector<int>& height) {
        int n = height.size();
        if (n == 1)
            return 0; // Base case when there's only one stone

        int prev1 = abs(height[1] - height[0]); // Cost to reach the 2nd stone
        int prev2 = 0;                          // Cost to stay at the 1st stone

…};`,
		},
		{
			content: `class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int m = triangle.size();        // Number of rows in the triangle
        int n = triangle[m - 1].size(); // Number of elements in the last row

        // DP table initialized with a large value (1e9) to represent an
        // unreachable state
        vector<vector<int>> dp(m, vector<int>(n, 1e9));

…        int ans = INT_MAX;
        for (int i = 0; i < n; i++) {
            ans = min(ans, dp[m - 1][i]);
        }

        return ans; // Return the minimum path sum
    }
};`,
		},
		{
			content: `i want the default image to be this 
data:image/png;base64,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

when the user hasnt uploaded any photo can u modify it in a way so it doesnt disturb the conditional rendering?`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
		{
			content: `I realized it was during the game because you can see the guy who hit a $100k shot taking pictures in the back 😭`,
		},
	];
	const [clips, setClips] = useState(arr);
	const [del, setDel] = useState(false);
	const [delInd, setDelInd] = useState(-1);

	const [copy, setCopy] = useState(false);

	const [scope, setScope] = useState("local");
	const [push, setPush] = useState(false);

	const refObj = {
		sync: "local",
		local: "sync",
	};

	function clearAll() {
		chrome.runtime.sendMessage(
			{ type: "CLEAR_ALL", data: "Ganesh Gaitonde", scope: scope },
			(response) => {
				console.log("Response from background:", response);
			}
		);
	}
	/*
    useEffect(() => {
      const storageType = scope === "sync" ? chrome.storage.sync : chrome.storage.local;
  
      storageType.get({ textClips: [] }, (data) => {
        setClips(data.textClips);
      });
    }, [scope]); // Dependency array ensures effect runs when `scope` changes
  
    useEffect(() => {
      const storageType = scope === "sync" ? chrome.storage.sync : chrome.storage.local;
  
      function handleChange(changes, area) {
        if (area === scope && changes.textClips) {
          setClips(changes.textClips.newValue);
        }
      }
  
      chrome.storage.onChanged.addListener(handleChange);
  
      return () => {
        chrome.storage.onChanged.removeListener(handleChange);
      };
    }, [scope]); // Re-run when scope changes
*/

	const copyClip = (index) => {
		navigator.clipboard
			.writeText(clips[index].content)
			.then(() => {
				console.log("Text copied to clipboard!");
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
			});
	};

	const delClip = () => {
		if (delInd !== -1) {
			chrome.runtime.sendMessage(
				{ type: "del_clip", data: delInd, scope: scope },
				(response) => {
					console.log(response);
				}
			);
			setDelInd(-1);
			setDel(false);
		}
	};

	function scopeHandler(type) {
		setDel(false);
		setCopy(false);
		setPush(false);

		setScope(type);
	}

	return (
		<div>
			<header className="header">
				<div className="innerdiv">
					<h1 className="title">CHROMECLIP</h1>
				</div>
				{copy && (
					<div className="statusBar">
						<h1 className="statustext">Copied to Clipboard</h1>
					</div>
				)}

				{push && (
					<div className="statusBar">
						<h1 className="statustext">
							PUSHED TO {refObj[scope]}
						</h1>
					</div>
				)}

				{del && (
					<div className="statusBar2">
						<h1 className="statustext2">
							Are you sure you Want to Delete?
						</h1>
						<button onClick={delClip} className="statusBtn">
							YES
						</button>
						<button
							onClick={() => setDel(false)}
							className="statusBtn"
						>
							NO
						</button>
					</div>
				)}

				<button onClick={clearAll} className="button">
					Clear Clipboard
				</button>
			</header>
			<div className="routediv">
				<button
					onClick={() => scopeHandler("sync")}
					className={scope === "sync" ? "routebtnActive" : "routebtn"}
				>
					SYNC
				</button>
				<button
					onClick={() => scopeHandler("local")}
					className={
						scope === "local" ? "routebtnActive" : "routebtn"
					}
				>
					LOCAL
				</button>
			</div>

			{clips.length == 0 && (
				<div className="errdiv">
					<h1 className="err">Nothing Clipped yet :(</h1>
				</div>
			)}

			{clips.length > 0 && (
				<>
					<div className="border-1 border-black w-full flex justify-between ">
						<div className="border-1 border-black w-44 ">
							<h3> space remaining</h3>
						</div>
						<div className="">Search</div>
					</div>
					<div className="grid">
						{clips.map((clip, index) => (
							<ClipboardCard
								key={index}
								content={clip.content}
								setDel={setDel}
								del={del}
								copy={copy}
								setCopy={setCopy}
								index={index}
								copyClip={copyClip}
								delClip={delClip}
								setDelInd={setDelInd}
								scope={scope}
								setPush={setPush}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
