let qnormReg = /@qnorm\(.*?\)/; // inverse normal: qnorm(mean, std, percentile)
let pnormReg = /@pnorm\(.*?\)/; // normal cdf: pnorm(mean, std, x)
let dpoisReg = /@dpois\(.*?\)/; // poisson pdf: ppois(x, rate)
let ppoisReg = /@ppois\(.*?\)/; // poisson cdf: ppois(x, rate)