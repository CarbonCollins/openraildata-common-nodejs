<a name="Association"></a>

## Association
**Kind**: global class  

* [Association](#Association)
    * [new Association()](#new_Association_new)
    * _instance_
        * [.tiploc](#Association+tiploc) ⇒ <code>String</code> &#124; <code>null</code>
        * [.category](#Association+category) ⇒ <code>String</code> &#124; <code>null</code>
        * [.mainTrain](#Association+mainTrain) ⇒ <code>Object</code> &#124; <code>null</code>
        * [.mainTrainId](#Association+mainTrainId) ⇒ <code>String</code> &#124; <code>null</code>
        * [.assocTrain](#Association+assocTrain) ⇒ <code>Object</code> &#124; <code>null</code>
        * [.assocTrainId](#Association+assocTrainId) ⇒ <code>String</code> &#124; <code>null</code>
    * _inner_
        * [~isJoin()](#Association..isJoin) ⇒ <code>Boolean</code>
        * [~isSplit()](#Association..isSplit) ⇒ <code>Boolean</code>
        * [~isNextTrain()](#Association..isNextTrain) ⇒ <code>Boolean</code>

<a name="new_Association_new"></a>

### new Association()
A class for association data and helpful functions

<a name="Association+tiploc"></a>

### association.tiploc ⇒ <code>String</code> &#124; <code>null</code>
gets the association tiploc code

**Kind**: instance property of <code>[Association](#Association)</code>  
**Returns**: <code>String</code> &#124; <code>null</code> - the tiploc code or null  
**Read only**: true  
<a name="Association+category"></a>

### association.category ⇒ <code>String</code> &#124; <code>null</code>
gets the association category

**Kind**: instance property of <code>[Association](#Association)</code>  
**Returns**: <code>String</code> &#124; <code>null</code> - the category or null  
**Read only**: true  
<a name="Association+mainTrain"></a>

### association.mainTrain ⇒ <code>Object</code> &#124; <code>null</code>
gets the main train information

**Kind**: instance property of <code>[Association](#Association)</code>  
**Returns**: <code>Object</code> &#124; <code>null</code> - an object containing all of the main trains information or null  
**Read only**: true  
<a name="Association+mainTrainId"></a>

### association.mainTrainId ⇒ <code>String</code> &#124; <code>null</code>
gets the main train rid

**Kind**: instance property of <code>[Association](#Association)</code>  
**Returns**: <code>String</code> &#124; <code>null</code> - the main trains rid  
**Read only**: true  
<a name="Association+assocTrain"></a>

### association.assocTrain ⇒ <code>Object</code> &#124; <code>null</code>
gets the assoc train information

**Kind**: instance property of <code>[Association](#Association)</code>  
**Returns**: <code>Object</code> &#124; <code>null</code> - an object containing all of the assoc trains information or null  
**Read only**: true  
<a name="Association+assocTrainId"></a>

### association.assocTrainId ⇒ <code>String</code> &#124; <code>null</code>
gets the assoc train rid

**Kind**: instance property of <code>[Association](#Association)</code>  
**Returns**: <code>String</code> &#124; <code>null</code> - the assoc trains rid  
**Read only**: true  
<a name="Association..isJoin"></a>

### Association~isJoin() ⇒ <code>Boolean</code>
checks to see if the association is a train join type

**Kind**: inner method of <code>[Association](#Association)</code>  
<a name="Association..isSplit"></a>

### Association~isSplit() ⇒ <code>Boolean</code>
checks to see if the association is a train split type

**Kind**: inner method of <code>[Association](#Association)</code>  
<a name="Association..isNextTrain"></a>

### Association~isNextTrain() ⇒ <code>Boolean</code>
checks to see if the association is a next train type

**Kind**: inner method of <code>[Association](#Association)</code>  
