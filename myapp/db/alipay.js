const AlipaySdk = require("alipay-sdk").default

// 普通公钥模式
let alipaySdk = new AlipaySdk({
	// appId
	appId: "2021000117666334",
	// 签名算法
	signType: "RSA2",
	// 支付宝网关
	gateway: "https://openapi.alipaydev.com/gateway.do",
	// 支付宝公钥
	alipayPublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArvhDEBB653nVt2F1NqgMdvAzbS2cz9ls2CSWGo+iZL/puifVdrt246dY8e9ri/wxBdYBFI1+pAzdRQ8rby6ktMtlUkcb1EfWvKktePUCFSwmLgKLSjDkSqRSXldqz8yzFFfCbG1WDnakL8L33npf4R1jCMwRkdyliNG5SYpCmTyjYwvUoG+D8DiR8VAzW1DhgP8bt4PmPkGxSd3L1m2IYPjDra+fecC+WnIaVoXLA3eQz2XV0LbXP9I3lgrZqHHxDcfkPnEL3+bZ1AFxTYC80MK4YHvifg6m2jCQks9QRw1oMSOGQqAvrFmQzmYDb6azkggkmc1mNdkkxmNc3+0wEwIDAQAB",
	// 应用私钥
	privateKey: "MIIEpAIBAAKCAQEAqoPaDcvGKCem7VXGhp5uTG9H65rskoGaVC900TRaT8EHk+Lke0WN9hTq4ylAYqaj3NyOKxTayuUAiOFhl7pH+6eJmfBGlxglD4M0cSKAlxZmw2bSVomkmL0YW4sGxJIPR0qJu71tDo0K1qWMCvqZk5nEqLMPOAuIAdTJs97wNgQV9sqXUtFd5+KQ2ZPRAhAwKgNo8j5jYtSEI5vGJjeIuKvqt8fLzrbdxq62MhH+uecraCXktGl5BekdTmBv6Zk1t90XW/PjjrfN16jcJjt5loXGzoT2ZkoyVrGNT7p+/gYIyzPXhonADqGrCsbwk1BvtSwYxqE7RHmOqktuOoI90wIDAQABAoIBAH5FbfDReki6NG+FGaMPJ/cKYWQkMhS8TSESk5to/YgaFhZ562EuPNaC3v6hycBETwx7d/yHUQ73TtIOtUq69Bt0Ef4hZOT3SFqYevlc54T7XdZOCm1zOKSzQ5pm9fgTgaT1mdGhkWU5JVGW/oIS2i/nqy6Siy6hu3I/ta6x5YjZfwSfmQbgVhGE2xkIWDPSzQJX875Nl4feHgSlbWNKjkvU2g6E7mn3ogLgJSci04ZiC8gXxOBPO64wQUgHBj2iQfVEiwnvzs0CwiFyEJ5QCzci76Ch1sWOSujmyx/iGBMP5XkxHzgu1ZE3QNL+wlzBCAPg64IlLmatXgE3V44HrEECgYEA5Lf1O6jURgl+0X6jZ2JSrNrPU5Bt0ylK0M4Yipkccl48zMq7QoCdcKG+L7K5DGqJznrkeJ+9nmxq8Xcsd4qi+J7t0ngM8405Dbav7UHvRbz1lpnKWBPyh8gaw9ZhsaZCE7xVt0/YELbtej1YwfjryMpyZSuHrDc+9ooYz3Ip1PsCgYEAvtqeQjR6e4MDcjoG4ITHyLMVVKBeHDDmRmzPM3zGbYYSgFZXOT0E4CTzA9UIVRzNU5brOcd3vP1QmWM9GCSutqzULP4XtzOj7qxVW+6R0qC1uxXEr6Bc2rBscLHCrfY5A6ydY/UK8pYcn09HX3jZI2DAPuNyQhTePPvF3pSHcwkCgYEAxytihFdasrqmEuyCgw7eC+RnUs+cs5trqTUvrdHzMazaqUOJmjnB4EkZAxRRjHxiEMp3losUZpbm8erjcB3sGTDczMD6FkTOgCCsRqF6KXKJMmIuEFEejBs3I37WiArN073Xrs/6yWNinWY6mn+XY7zXrT4g4VkinTJYtJ0nzG0CgYBV1Hlxqqoem6fUGfZ3yB8UyjzghxJruS4GI+7257lRDgeKAcpOKnvj1ZoYchjCNia83dVBccwOiRlTMgcKsYyFCKqO5WKC+E1UC9qDcoHP6Ihx73M5zHOVwduyvq6fj2jKlzlc95mJySpsFroxXGbCe0NZxO3gfAQKBuxQkhlsCQKBgQC5AO0YpNcteSqzjS2jL13gNgpqR4QBgLuiYCqIyo4vUWRhj2Qramvl5Yo+WrXrPwdJ2vXVWueaXSH2ZL36ZN/39pu3Ee9OiXceiLdmydKdABNvcLThcrCNOTQNXmaydF3JejCAFLN2CNsNEGg3Sv/GjVAf8ohLMl7xOAtk7GZ8sA=="
})

module.exports = alipaySdk
