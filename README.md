# Pangolin Project Data Catalog

## Global Dataset
 1. [CITES Trade Database Download](https://trade.cites.org/) 
     - [Database Documentation](https://trade.cites.org/cites_trade_guidelines/en-CITES_Trade_Database_Guide.pdf )
     - Description: report records of import/export of pangolins by countries (non-transactional record)
     - Major Fields: ```Year```, ```Taxon```, ```Importer```, ```Exporter```, ```Origin```, ```Imp Quantity```, ```Imp Unit```, ```Imp Term```, ```Imp Purpose```, ```Imp Source```, ```Reporter Type```
     - Data Subset of Manidae - [data download](https://github.com/Roytangrb/pangolin/tree/master/CITIES%20Analysis/manidae.csv)
     - Size: 20 million+ records (full dataset)
     - Range: ***1975*** onwards
     - Format: CSV
     - Source: NGO
     - Remarks: ***Error data not marching headers are spliced out. Error Data and Locations can be viewed on this*** [notebook](https://github.com/Roytangrb/pangolin/blob/master/CITIES%20Analysis/cites.ipynb) (spliced out data do not concern Manidae but other species)

  2. [Environmantal Investigation Agency](https://eia-international.org/wildlife/wildlife-trade-maps/illegal-trade-seizures-pangolins/)
     - [Carto link](https://tomaszjohnson.carto.com/builder/5fe400fc-8202-4c65-ac51-48dbcb052f6e/embed)
     - Description: a subset seizure incidents from 2000 to 2018, compiled from publicly available records and represents only a fraction of actual trade during that period
     - Major Fields: ```Location```, ```Volume(Est.)``` (no raw data publicly available)
     - Size: N/A
     - Range: ***2000*** - ***March 2009***
     - Format: Plot Map Visual
     - Source: NGO
     - Remarks: ***raw data need to be requested***

## China Dataset
 1. [China Judgements Online Database](http://wenshu.court.gov.cn/)
     - Description: Gov official GUI courtcase search website tool
     - Major Fields: N/A
     - Size: N/A
     - Range: N/A
     - Format: MS Word
     - Source: Government

  2. [HKU Paper on Pangolin Seizures in China](https://onlinelibrary.wiley.com/doi/full/10.1111/conl.12339)
     - [Research data download](https://onlinelibrary.wiley.com/action/downloadSupplement?doi=10.1111%2Fconl.12339&file=conl12339-sup-0002-tableS1.xlsx)
     - Description: We summarize pangolin seizure data reported in public media from 2008 to 2016, incorporating often neglected small seizures reported in Chinese.
     - Major Fields: ```year```, ```province```, ```city```, ```amount```, ```unit(kg/ind/piece)```, ```status(scale/alive/meat)```, ```equal individual```, ```source country```, ```from```, ```to```, ```stop```, ```custom or not```, ```form```, ```species```, ```media source```
     - Size: 207 records
     - Range: media reports from ***2008*** - ***2016***
     - Format: Excel
     - Source: Academic (media reports, court verdicts, CITES...)


## Hong Kong Dataset
 1. [Hong Kong Customs Press Release data download](https://docs.google.com/spreadsheets/d/1IjPrjt--8NIioltO7pHv4X_5W4wmj48C_HzzWJL4lHg/edit#gid=69729802)
     - [Repo](https://github.com/Roytangrb/pangolin/tree/master/hkcustomdata)
     - Description: Text data on HK Customs press release
     - Major Fields: ```Year```, ```Month```, ```Date```, ```Title```, ```Url```, ```Article```
     - Size: 2352 records (all press release)
     - Range: ***2004*** - ***2018***
     - Format: TSV/Excel/Spreadsheet
     - Source: Government (self scraped & curated database)

## Nepal Dataset
 1. Central Investigation Bureau, Nepal Police
     - [data download](https://github.com/Roytangrb/pangolin/tree/master/nepal)
     - Description: summary of pangolin operation data since 2012
     - Major Fields: N/A
     - Size: N/A
     - Range: Since ***2012***
     - Format: Summary data
     - Source: government