import Test.QuickCheck

triple :: [a] -> [a]
triple l = l ++ l ++ l

propa :: [a] -> Bool
propa a1 = length(triple a1) == 3 * length a1

main :: IO ()
main = quickCheck (propa :: [Integer] -> Bool )