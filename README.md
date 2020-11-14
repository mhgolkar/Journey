# J⊙URNEY
## Storytelling, the heroes' way

Journey is a systematic story-writing app. It provides creative writers with a set of tools, aimed to make constructing their stories easier and consciously planned.

## Notice
**Journey is NOT under development anymore. Consider it a free open concept.**  
You may find another open-source project [manuskript](https://github.com/olivierkes/manuskript) interesting (no relation).

## Its Philosophy & Design

![](./docs/media/intro_big_shot.png)

### They write wisely

Many great epic stories and folk-tales, also plenty of modern novels including works of novelists James Joyce and Ernest Hemingway, tend to travel over an ancient pattern for their protagonists' adventures and developments, called the *Hero's Journey*.  
The concept is first discussed in the book *The Hero with a Thousand Faces (1949)*; a work of comparative mythology by Joseph Campbell, where he discusses his theory of the mythological structure of the journey of the archetypal hero found in world myths.  
The structure can be found in wide variety of works from the epic poem *Gilgamesh* to the *Star Wars* films and *The Lion King*. In many cases, it is planned and applied consciously.
The hero's journey is not the only way by which creative writers plan the construction of their stories, there are many other helper-structures such as *the Three Act Structure*, *Four Acts Structure* and *Six Stage Plot Structure* as well. However, one point is obvious, authors mostly write wisely planned and with the end in mind; specially for the larger works. This is why they need a tailored product, a specialized writing application, meeting their way of creation.  

### More than a digital typewriter
Each story (J⊙urney project) is made of a sequence of Sub-plots, Headings and Nodes. Headings are only to divide stories into different stages and subplots are exactly what they sound. On the other hand, Nodes are the components. They are cells or molecules of construction. Every node carries a set of data including following properties:  
- Title of the node
- User-definable status of the node (e.g. wip, finished, 1st draft, etc.)
- Synopsis
- A list of linked resources
- Time and Places tags (regarding the events happening over the node)
- Sub-plots to which the node is related
- Last modification date and time
- [Full-] Text
- History (snapshots to save previous drafts of the node's full-text)

To manage such elaborate data structure so easily, J⊙urney includes following tool-sets:

- **Project Manager (Loader)**  
	All the projects you are working on, are listed in this pane. You may manipulate the list or switch between projects by only two clicks.

- **Plot Manager**  
	Plot Manager is the main tool to plan your story. This is where you add new nodes to a story, copy or move existing nodes, remove unwanted ones, manage sub-plots and finally, where you can monitor and travel over story sequence.  
	You can also copy or move nodes from one project to another. J⊙urney automatically detects the difference between normal texts and migrating nodes, so they never conflict with each other.

- **Node Composer**  
	Node Composer may be opened from [Full-text] Editor or by double-clicking on a node in Plot Manager. In synchronized mode, every time you click on a node (whether in full text or plot) Node Composer will let you to edit all the data stored in the node but it's full text.

- **Full-text Editor**  
	It is exactly what it says: where authors edit the body of their stories. To Save a project or export it (print to file) one should check the full text editor. Full-text editor is the largest pane and unlike other tool-sets there can be only one open instance of it per project.

- **Resource Manager**  
	Resource Manager is one helpful tool. It comes in handy when you need to keep lots of notes about your story, like when you are working on a biographic or historical writing. Resource Manager also manages notes' contents and connections. Here, notes can be managed by titles and tags (keywords) and may be attached to nodes by a click. There is also a highly functional search tool. Notes are stored in the open project, but can be exported to independent files and exchanged between projects.

### Even more

- **Synchrony and Floating Windows**  
	Each tool-set is framed to a floating window. The user can open multiple instances of them, and they still work in perfectly stealth, real-time synchrony.

- **Eye-Friendly**  
	You may find two features of J⊙urney, most caring. *Dark-Mode* activates the dark theme instantly and *Focus Mode* makes sure that the right paragraph — the one you are busy with — is focused and distinct from the rest of the text.

- **RTL & International Character Support**  
	J⊙urney supports *Right-to-Left* languages such as Hebrew, Persian/Farsi and Urdu. Its interface reacts to the direction of projects and adapts inputs for the best experience.
	J⊙urney's project files have UTF-8 encoding which is capable of encoding all valid code points in Unicode.

- **Minimal & Distraction-free**  
	J⊙urney is designed to be distraction-free and just what authors need. The interface is clean and flat; trying to be invisible. Many word-processing bells-and-whistles are intentionally removed (e.g. There is no buttons for making texts bold, italic, etc. yet  plenty of keyboard-friendly functions are there to do so.)  
	*Full-Screen-Mode* is another feature to support this approach.

- **Responsive Interface**  
	Any display, any size; J⊙urney's interface automatically adapts itself to make sure, you have the best view of your work. Changing size of texts *(Text Zoom)* and nodes, is as easy as clicking on a button or scrolling mouse wheel combined with Ctrl key.

## Technical Specs
### Free & Portable as Wind

J⊙urney is an Electron app. It is compatible with all the major operating-systems. One may copy the whole app and the Electron binaries into a USB flash drive and make it perfectly portable.  

### Peaceful File Formats

J⊙urney plays fairly. There won't be any catch. There will be no complications, no proprietary formats, no binaries. There are only a handful of supported file formats, but all open, UTF-8, human-readable, light and multi-purposed.  

- **dot Journey `.jrny`**  
	Project files are JSON-formatted files with *.jrny* extension. JSON is a very neat and clean way to store complex data as text. Almost every programming language understands it and there are many tools to edit files with such format including modern web browsers.

- **dot note(s) `.note`**  
	J⊙urney's *Resource Manager* saves your notes in project files. You may also export notes from resource manager independent from projects. The result is a *.note* file which can be later imported to an open instance of Resource Manager (and optionally mixed to the working project).

- **Printed Stories**  
	It is possible to export (print to file) J⊙urney projects in three following formats:
	* Full Text `.html`  
		It prints the main body of your story into an HTML file (with no scripts or styling). Node titles and Timestamps (last modification time and date of every node) are also printed as the comments in the file. HTML files are very portable and handy, they can also get edited using word-processors such as LibreOffice.  
		Note: You may open *.html* files in a browser but it probably hides the commented data.

	* Synopsis `.txt`  
		This option will print the structure of your story, including only what has been planned using *Plot Manager*. The result is a UTF-8 *text* file. Full texts (written using Editor) will not be printed in this option.

	* Screenplay Mode `.sp.html`  
		The same as *Full Text .html* files, plus *time / place* tags similar to *Scene Headings* of a screenplay.

	* Project Pack  
		This option exports all the formats mentioned above besides a copy of the current state of the project (~ save a .jrny copy as) into a directory named after the defined file name.
  
  
Morteza H. Golkar  
2018
