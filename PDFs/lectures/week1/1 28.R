#Save all R files as .R

4 + 1
2 + 2

#Short cut to run a line: Ctrl + Enter
# Macs: Command Enter?

#Create variables base and height
base <- 3
height <- 5
#Shortcut: Alt + -    = works as well


#Calculate Area of triangle
0.5*base*height


ls()
rm(list = ls())

base

a <- 10
2*a
a^2

#to make a vector, use c()
my.vec <- c(3,2,5,3,1,3,5,3)
my.vec
5*my.vec
1+my.vec

class(a)
b <- FALSE
class(b)

#Create a random normal vector of length 50 (we'll discuss later this semester)
rand.norm <- rnorm(50, 0, 1)   #length 50, mean 0, sd 1
rand.norm

mean(rand.norm)
mean(my.vec)

sd(my.vec)
sd(rand.norm)

#make a sequence of numbers from 1 to 30
1:30

#make a sequence
x <- seq(from = -3, to = 3, by = 0.1)
x
y <- x^2
plot(x,y)
windows();plot(x,y) 
#If using Mac, quartz()

#create a 3x3 matrix
firstmatrix <- matrix(c(3,1,3,5,5,2,1,3,5), nrow = 3, byrow=TRUE)
firstmatrix

matrix2 <- matrix(c(3,1,3,5,5,2,1,3), ncol = 2, byrow=FALSE)
matrix2

#find element in 2nd row 1st col
firstmatrix[2,1]
firstmatrix[3,2]
firstmatrix[1,] #1st row
firstmatrix[,3] #3rd column

?sd
?mean
?rnorm
ls()

squarer <- function(x){
  x^2 + 5
}

squarer(6)
2

squarer(7)
