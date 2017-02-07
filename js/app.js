var myComparisonObject = 
{
    getStringMatches: function(searchString, resultsString)
    {
        this.searchParams = this.parseSearchParams(searchString);
        this.results = this.parseSearchParams(resultsString);
        this.matches = 0;
      
        for (var searchParam in this.searchParams)
        {
            for (result in this.results) {
                if (  this.searchParams[searchParam] === this.results[result])
                {
                    this.matches++;
                }
            }
        }
        return this.matches;
    },
    parseSearchParams: function(queryString)
    {
        return queryString.split('/');
    },
    compare: function(a, b)
    {
        this.count = this.getStringMatches(a, b)
        this.a = this.parseSearchParams(a);
        this.b = this.parseSearchParams(b);
        return 2 * ( this.count/(this.b.length + this.a.length) );
    },
    equals: function (a, b)
    {
         return (this.compare(a,b) === 1);
    }
};

//Initializing test vars and object
var a = 'term/course';
var b = 'term/course';

console.log(myComparisonObject.compare(a,b));
console.log(myComparisonObject.equals(a,b));