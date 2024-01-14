let qnormReg = /@qnorm\(.*?\)/; // inverse normal: qnorm(quantile, mean, std)
let pnormReg = /@pnorm\(.*?\)/; // normal cdf: pnorm(x, mean, std)

let dpoisReg = /@dpois\(.*?\)/; // poisson pmf: ppois(x, rate)
let ppoisReg = /@ppois\(.*?\)/; // poisson cdf: ppois(x, rate)

let pbinomReg = /@pbinom\(.*?\)/; // binomial cdf: pbinom(x, n, p)

let dnbinomReg = /@dnbinom\(.*?\)/; // negative binomial pmf: dnbinom(x, n, p)
let pnbinomReg = /@pnbinom\(.*?\)/; // negative binomial cdf: pnbinom(x, n, p)

let pgammaReg = /@pgamma\(.*?\)/; // gamma cdf: pgamma(x, alpha, theta)

let qtReg = /@qt\(.*?\)/; // inverse t: qt(quantile, df)
let ptReg = /@pt\(.*?\)/; // t cdf: pt(x, df)

let qchisqReg = /@qchisq\(.*?\)/; // inverse chi square: qchisq(quantile, df)
let pchisqReg = /@pchisq\(.*?\)/; // chi square cdf: pchisq(x, df)