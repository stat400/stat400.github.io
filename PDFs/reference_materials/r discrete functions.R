
## Using R for pmfs and cdfs

## prefix d-  is for pmfs  (pdfs in chapter 3)
## prefix p- is for cdfs

## for example
##dbinom is for binomial pmf
##pbinom is binomial cdf

#use '?' before a function in R to see the help file  e.g.
?dbinom
#by default, R will NOT take the natural log of the pmfs. That is the "log = FALSE" part
#that you might see in the help file. You can just leave this out when using these functions.



###Function names for distributions we have covered so far:

#Binomial
?dbinom()
?pbinom()

# e.g.
dbinom(4,20,.2)
pbinom(4,20,.2)


#Hypergeometric
#note: specify (x, #total successes, #total failures, n)
?dhyper()
?phyper()

# e.g.
choose(10,2)*choose(20,3)/choose(30,5)
dhyper(2,10,20,5)


#Geometric
#specify total number of FAILURES until first success

dgeom(5,.2)  #This gives the probability that first success occurrs on trial 6 (5 failures)
?pgeom()

#Negative Binomial
#specify total number of FAILURES until rth success
#(failures, r, p)
dnbinom(10,3,.2) #probability that 3rd success occurs on trial 13 (10 failures) with p=.2
?pnbinom()

#Poisson
?dpois()
?ppois()
